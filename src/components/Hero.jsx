import { useRef, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { usePointerTilt, useReducedMotion } from '../hooks.js';
import { ui, CV_URL } from '../data.js';
import figureSvg from '../figure.svg';

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14" />
    </svg>
  );
}

// La figura es un SVG estático; se inserta tal cual para no pagar su costo en JSX.
function Figure() {
  const { t } = useLang();
  const [focus, setFocus] = useState(false);
  const [pop, setPop] = useState(0);
  return (
    <button
      className={`figbtn ${focus ? 'cap' : ''} ${pop ? 'pop' : ''}`}
      type="button"
      aria-pressed={focus}
      aria-label={t(ui.figAria)}
      onClick={() => { setFocus((f) => !f); setPop((n) => n + 1); }}
      onAnimationEnd={() => setPop(0)}
    >
      <span className="fig-wrap" dangerouslySetInnerHTML={{ __html: figureSvg }} />
      <span className="fig-tip">{t(ui.figTip)}</span>
    </button>
  );
}

export default function Hero() {
  const { t } = useLang();
  const stackRef = useRef(null);
  const layersRef = useRef(null);
  const reduce = useReducedMotion();
  usePointerTilt(stackRef, layersRef, {}, reduce);

  return (
    <section className="wrap hero" aria-label="Ali Rayo">
      <div>
        <p className="status"><i />{t(ui.status)}</p>
        <h1>{t(ui.h1a)}<span>{t(ui.h1b)}</span></h1>
        <p className="lead">{t(ui.lead)}</p>
        <div className="actions">
          <a className="btn primary" href="#trabajo">{t(ui.seeWork)}</a>
          <a className="btn" href={CV_URL} download="CV-Ali-Rayo-Backend.pdf"><DownloadIcon />{t(ui.downloadCv)}</a>
        </div>
      </div>

      <div className="stack" ref={stackRef}>
        <div className="layers3d" ref={layersRef} aria-hidden="true">
          <div className="plate p-cloud"><small>{t({ es: 'Nube', en: 'Cloud' })}</small><b>AWS · Terraform · Docker</b></div>
          <div className="plate p-data"><small>{t({ es: 'Datos', en: 'Data' })}</small><b>PostgreSQL · MongoDB</b></div>
          <div className="plate p-api"><small>API</small><b>NestJS · Python · JWT</b></div>
          <div className="plate p-ui">
            <div className="dots"><i /><i /><i /></div>
            <small>{t({ es: 'Interfaz · Next.js', en: 'Interface · Next.js' })}</small>
            <b style={{ marginBottom: 12 }}>{t({ es: 'Panel de catálogo', en: 'Catalog dashboard' })}</b>
            <div className="row"><span>Pizza margarita</span><span className="badge ok">{t({ es: 'Activo', en: 'Active' })}</span></div>
            <div className="row"><span>{t({ es: 'Lasagna boloñesa', en: 'Lasagna bolognese' })}</span><span className="badge">{t({ es: 'Borrador', en: 'Draft' })}</span></div>
            <div className="row"><span>Tiramisú</span><span className="badge ok">{t({ es: 'Activo', en: 'Active' })}</span></div>
          </div>
        </div>
        <p className="stack-hint">{t(ui.stackHint)}</p>
        <Figure />
      </div>
    </section>
  );
}
