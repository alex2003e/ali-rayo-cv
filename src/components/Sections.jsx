import { useLang } from '../i18n.jsx';
import { stats, experience, ui, EMAIL, PHONE, LINKEDIN, GITHUB, CV_URL } from '../data.js';

export function Stats() {
  const { t } = useLang();
  return (
    <div className="wrap stats" role="list">
      {stats.map((s, i) => (
        <div className="stat" role="listitem" key={i}><b>{t(s.n)}</b><span>{t(s.l)}</span></div>
      ))}
    </div>
  );
}

export function Experience() {
  const { t } = useLang();
  return (
    <section className="wrap sec" id="experiencia" aria-labelledby="h-xp">
      <div className="head">
        <h2 id="h-xp">{t(ui.xpTitle)}</h2>
        <p>{t(ui.xpSub)}</p>
      </div>
      <div className="xp">
        {experience.map((job, i) => (
          <article className="job" key={i}>
            <time>{t(job.when)}</time>
            <div><h3>{t(job.role)}</h3><p className="co">{t(job.company)}</p></div>
            <ul>{job.points.map((p, j) => <li key={j}>{t(p)}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact({ onCopy }) {
  const { t } = useLang();
  return (
    <section className="wrap" id="contacto" aria-labelledby="h-cta">
      <div className="cta">
        <div>
          <h2 id="h-cta">{t(ui.ctaTitle)}</h2>
          <div className="actions">
            <button className="btn dark" type="button" onClick={onCopy}>{t(ui.copyEmail)}</button>
            <a className="btn" href={CV_URL} download="CV-Ali-Rayo-Backend.pdf">{t(ui.downloadCvShort)}</a>
          </div>
        </div>
        <div className="links">
          <strong>{EMAIL}</strong>
          <span>{PHONE}</span>
          <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
      <div className="foot">
        <span>Ali Alexander Rayo Gutiérrez · Medellín, Colombia</span>
        <span>{t(ui.builtWith)}</span>
      </div>
    </section>
  );
}
