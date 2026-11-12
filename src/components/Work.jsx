import { lazy, Suspense, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { projects, ui } from '../data.js';

// El detalle de cada proyecto se descarga solo cuando alguien abre uno.
const ProjectDialog = lazy(() => import('./ProjectDialog.jsx'));

function Visual({ type }) {
  const { t } = useLang();
  switch (type) {
    case 'roles':
      return (
        <div className="mock" aria-hidden="true">
          <div className="grid">
            <nav>
              <span>{t({ es: 'Panel', en: 'Dashboard' })}</span>
              <span className="on">{t({ es: 'Catálogo', en: 'Catalog' })}</span>
              <span>{t({ es: 'Usuarios', en: 'Users' })}</span>
              <span>Tenants</span>
            </nav>
            <div>
              <strong>{t({ es: 'Roles por tenant', en: 'Roles per tenant' })}</strong>
              <div className="row"><span>TENANT_ADMIN</span><span>{t({ es: 'Catálogo y usuarios', en: 'Catalog and users' })}</span></div>
              <div className="row"><span>TENANT_STAFF</span><span>{t({ es: 'Menú y combos', en: 'Menu and combos' })}</span></div>
              <div className="row"><span>SUPER_ADMIN</span><span>{t({ es: 'Todos los tenants', en: 'All tenants' })}</span></div>
            </div>
          </div>
        </div>
      );
    case 'bars':
      return (
        <div className="vis" aria-hidden="true">
          <div className="bars">
            <div><div className="b0" /><small>{t({ es: 'Antes', en: 'Before' })}</small></div>
            <div><div className="b1" /><small>{t({ es: 'Después', en: 'After' })}</small></div>
          </div>
        </div>
      );
    case 'flow':
      return (
        <div className="vis" aria-hidden="true">
          <div className="flow">
            <span>{t({ es: 'Borrador IA', en: 'AI draft' })}</span>
            <span className="on">{t({ es: 'Aprobación', en: 'Approval' })}</span>
            <span>{t({ es: 'Programado', en: 'Scheduled' })}</span>
            <span>{t({ es: 'Publicado', en: 'Published' })}</span>
          </div>
        </div>
      );
    case 'calendar': {
      const days = [
        ['Lun 6–14', 'Mon 6–14', ''], ['Mar 22–6', 'Tue 22–6', 'n'], ['Vie 14–22', 'Fri 14–22', ''], ['Dom 22–6', 'Sun 22–6', 's'],
        ['Mié 22–6', 'Wed 22–6', 'n'], ['Jue 6–14', 'Thu 6–14', ''], ['Sáb 14–22', 'Sat 14–22', ''], ['Dom 6–14', 'Sun 6–14', 's'],
      ];
      return (
        <div className="vis" aria-hidden="true">
          <div className="cal">{days.map(([es, en, c]) => <span key={es} className={c}>{t({ es, en })}</span>)}</div>
        </div>
      );
    }
    case 'trace':
      return (
        <div className="vis" aria-hidden="true">
          <div className="trace">
            <div><span>{t({ es: 'Nacimiento · lote 114', en: 'Birth · batch 114' })}</span><em>ICA</em></div>
            <div><span>{t({ es: 'Vacunación', en: 'Vaccination' })}</span><em>ICA</em></div>
            <div><span>{t({ es: 'Movilización', en: 'Transport' })}</span><em>ICA</em></div>
          </div>
        </div>
      );
    case 'code':
      return (
        <div className="vis" aria-hidden="true" style={{ minHeight: 0 }}>
          <div className="code">
            <span className="c">{t({ es: '# varios archivos en una sola petición', en: '# several files in a single request' })}</span>{'\n'}
            <span className="k">POST</span> /files/upload  →  <span className="g">201 Created</span>  ·  factura.pdf, foto.jpg  →  S3
          </div>
        </div>
      );
    default:
      return null;
  }
}

function Card({ project, onOpen }) {
  const { t } = useLang();
  const cls = ['card', project.size].filter(Boolean).join(' ');
  return (
    <button className={cls} type="button" onClick={() => onOpen(project.id)}>
      <Visual type={project.visual} />
      <div>
        <span className={`tag ${project.live ? 'live' : ''}`}>{t(project.tag)}</span>
        <h3 style={{ marginTop: 12 }}>{t(project.title)}</h3>
        <p>{t(project.short)}</p>
        <span className="more">{t(ui.readCase)}</span>
      </div>
    </button>
  );
}

export default function Work() {
  const { t } = useLang();
  const [openId, setOpenId] = useState(null);
  const project = projects.find((p) => p.id === openId);

  return (
    <section className="wrap sec" id="trabajo" aria-labelledby="h-trabajo">
      <div className="head">
        <h2 id="h-trabajo">{t(ui.workTitle)}</h2>
        <p>{t(ui.workSub)}</p>
      </div>
      <div className="bento">
        {projects.map((p) => <Card key={p.id} project={p} onOpen={setOpenId} />)}
      </div>
      {project && (
        <Suspense fallback={null}>
          <ProjectDialog project={project} onClose={() => setOpenId(null)} />
        </Suspense>
      )}
    </section>
  );
}
