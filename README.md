# Ali Rayo · CV web

Portafolio y hoja de vida de **Ali Alexander Rayo Gutiérrez**, desarrollador backend semi-senior (NestJS · Python · AWS) que también construye interfaces.

🔗 **https://ali-rayo-cv.vercel.app** · 📄 [CV en PDF](https://ali-rayo-cv.vercel.app/cv-ali-rayo.pdf)

## Stack

- **React 19** con componentes funcionales, hooks propios y contexto para el idioma (ES / EN).
- **esbuild** como bundler: build en menos de un segundo, sin configuración pesada.
- **Pre-render en el build**: el HTML llega completo y React solo lo hidrata, así que el contenido se ve antes de que cargue el JavaScript (y funciona sin JS).
- **CSS puro**: animaciones 3D, `position: sticky` y variables CSS. Sin librerías de animación ni de UI.

## Decisiones de rendimiento

| Decisión | Por qué |
| --- | --- |
| Pre-render con `react-dom/server` | Primer pintado inmediato y buen SEO, sin servidor. |
| `React.lazy` para el detalle de proyectos | El código del diálogo se descarga solo al abrir uno. |
| Animaciones con variables CSS escritas desde `requestAnimationFrame` | El cursor y el scroll no provocan re-renders de React en cada frame. |
| `<dialog>` nativo | Foco, Escape y fondo bloqueado sin librerías. |
| Archivos con hash + caché inmutable en Vercel | Las visitas repetidas no vuelven a descargar JS ni CSS. |
| `prefers-reduced-motion` | Quien desactiva animaciones ve todo estático. |

## Estructura

```
src/
  App.jsx                 composición de la página
  data.js                 todo el contenido, en español e inglés
  i18n.jsx                contexto de idioma (ES / EN, ?lang=en)
  hooks.js                usePointerTilt, useScrollProgress, useActiveSection, useReducedMotion
  components/
    Header.jsx            menú con sección activa
    Hero.jsx              capas 3D que siguen el cursor y la figura de Ali
    Work.jsx              mosaico de proyectos
    ProjectDialog.jsx     detalle de cada proyecto (carga diferida)
    LayersScene.jsx       capas que se separan con el scroll
    ApiDemo.jsx           simulación de una petición de punta a punta
    Sections.jsx          métricas, experiencia y contacto
  styles.css
build.mjs                 bundle + pre-render + copia de public/
```

## Desarrollo

```bash
npm install
npm run build     # genera dist/
npm run preview   # sirve dist/ en local
```

Contacto: alirayopuches@gmail.com · [LinkedIn](https://linkedin.com/in/ali-rayo)
