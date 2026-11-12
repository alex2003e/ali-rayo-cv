// Build del sitio: empaqueta React con esbuild y pre-renderiza el HTML.
// Resultado en dist/: HTML estático listo para mostrarse antes de cargar JS.
import { build } from 'esbuild';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const out = 'dist';
await rm(out, { recursive: true, force: true });
await mkdir(`${out}/assets`, { recursive: true });

const shared = {
  bundle: true,
  jsx: 'automatic',
  loader: { '.svg': 'text' },
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'warning',
};

// 1) Cliente: ESM con división de código (el diálogo de proyectos va aparte).
const client = await build({
  ...shared,
  entryPoints: ['src/main.jsx'],
  outdir: `${out}/assets`,
  format: 'esm',
  splitting: true,
  minify: true,
  target: ['es2020'],
  entryNames: '[name]-[hash]',
  chunkNames: 'chunk-[hash]',
  metafile: true,
});

// 2) Pre-render: el mismo árbol de React, ejecutado en Node una sola vez.
const ssrFile = '.ssr/prerender.mjs';
await build({
  ...shared,
  entryPoints: ['src/prerender.jsx'],
  outfile: ssrFile,
  format: 'esm',
  platform: 'node',
  external: ['react', 'react-dom'],
  loader: { '.svg': 'text', '.css': 'empty' },
});
const { render } = await import(pathToFileURL(ssrFile).href + `?t=${Date.now()}`);
const appHtml = render();
await rm('.ssr', { recursive: true, force: true });

// 3) Inyecta el HTML y los archivos con hash en la plantilla.
const outputs = Object.keys(client.metafile.outputs);
const js = outputs.find((f) => /main-.*\.js$/.test(f)).replace(`${out}/`, '');
const css = outputs.find((f) => /main-.*\.css$/.test(f)).replace(`${out}/`, '');
// Precarga los chunks que main importa de forma estática (evita la cascada de peticiones).
const preloads = client.metafile.outputs[`${out}/${js}`].imports
  .filter((i) => i.kind === 'import-statement')
  .map((i) => `<link rel="modulepreload" href="/${i.path.replace(`${out}/`, '')}">`)
  .join('\n');
const template = await readFile('index.html', 'utf8');
const html = template
  .replace('<!--styles-->', `<link rel="stylesheet" href="/${css}">\n${preloads}`)
  .replace('<!--app-->', appHtml)
  .replace('<!--scripts-->', `<script type="module" src="/${js}"></script>`);
await writeFile(`${out}/index.html`, html);

// 4) Archivos públicos (CV en PDF, imagen para compartir).
await cp('public', out, { recursive: true });

const sizes = await Promise.all(
  (await readdir(`${out}/assets`)).map(async (f) => `${f} ${((await readFile(`${out}/assets/${f}`)).length / 1024).toFixed(1)} KB`),
);
console.log('Build listo:\n  ' + sizes.join('\n  '));
