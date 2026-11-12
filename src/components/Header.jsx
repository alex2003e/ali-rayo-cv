import { useLang } from '../i18n.jsx';
import { useActiveSection } from '../hooks.js';
import { ui } from '../data.js';

const SECTIONS = ['trabajo', 'capas', 'demo', 'contacto'];
const LABELS = { trabajo: 'work', capas: 'layers', demo: 'demo', contacto: 'contact' };
const ALWAYS = new Set(['trabajo', 'contacto']);

export function Logo() {
  return (
    <svg className="mark" viewBox="0 0 40 40" width="34" height="34" aria-hidden="true">
      <path d="M20 22 36 30 20 38 4 30Z" fill="#3A2A60" />
      <path d="M20 14 36 22 20 30 4 22Z" fill="#6C59A6" />
      <path d="M20 2 36 10 20 18 4 10Z" fill="#B9A4FF" />
      <circle cx="34" cy="4" r="3.4" fill="#6FE3C1" />
    </svg>
  );
}

export default function Header() {
  const { lang, setLang, t } = useLang();
  const active = useActiveSection(SECTIONS);
  const other = lang === 'es' ? 'en' : 'es';

  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#inicio" aria-label="Ali Rayo">
          <Logo />
          <span className="word">ali<span>.</span>rayo</span>
        </a>
        <div className="nav-r">
          <nav className="pills" aria-label={lang === 'es' ? 'Secciones' : 'Sections'}>
            {SECTIONS.map((id) => (
              <a key={id} href={`#${id}`} className={`${ALWAYS.has(id) ? 'keep' : ''} ${active === id ? 'on' : ''}`.trim()}>
                {t(ui.nav[LABELS[id]])}
              </a>
            ))}
          </nav>
          <button
            className="lang"
            type="button"
            onClick={() => setLang(other)}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            <b>{lang.toUpperCase()}</b><span>/ {other.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
