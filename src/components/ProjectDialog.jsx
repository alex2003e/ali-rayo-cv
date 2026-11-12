import { useEffect, useRef } from 'react';
import { useLang } from '../i18n.jsx';
import { ui } from '../data.js';

// Usa el <dialog> nativo: foco atrapado, Escape y fondo bloqueado sin librerías.
export default function ProjectDialog({ project, onClose }) {
  const { t } = useLang();
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    const handle = () => onClose();
    d.addEventListener('close', handle);
    return () => d.removeEventListener('close', handle);
  }, [onClose]);

  const titleId = `dh-${project.id}`;
  return (
    <dialog ref={ref} aria-labelledby={titleId} onClick={(e) => { if (e.target === ref.current) ref.current.close(); }}>
      <div className="dlg">
        <div className="dlg-top">
          <div>
            <span className={`tag ${project.live ? 'live' : ''}`}>{t(project.dialogTag ?? project.tag)}</span>
            <h3 id={titleId}>{t(project.dialogTitle ?? project.title)}</h3>
          </div>
          <button className="close" type="button" aria-label={t(ui.close)} onClick={() => ref.current.close()}>✕</button>
        </div>
        <p className="intro">{t(project.intro)}</p>
        <ul>{project.points.map((pt, i) => <li key={i}>{t(pt)}</li>)}</ul>
        <div className="meta">{project.stack.map((s, i) => <span key={i} className="chip">{t(s)}</span>)}</div>
        {project.repo && (
          <a className="btn primary" href={project.repo} target="_blank" rel="noopener" style={{ justifySelf: 'start' }}>{t(ui.seeCode)}</a>
        )}
        {project.private && <p className="note">{t(ui.privateRepo)}</p>}
        {project.note && <p className="note">{t(project.note)}</p>}
      </div>
    </dialog>
  );
}
