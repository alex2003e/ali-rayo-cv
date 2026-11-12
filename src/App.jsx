import { useCallback, useEffect, useRef, useState } from 'react';
import { LangProvider, useLang } from './i18n.jsx';
import { ui, EMAIL } from './data.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import LayersScene from './components/LayersScene.jsx';
import ApiDemo from './components/ApiDemo.jsx';
import { Stats, Experience, Contact } from './components/Sections.jsx';

function Page() {
  const { t } = useLang();
  const [toast, setToast] = useState('');
  const timer = useRef(0);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast(t(ui.copied) + EMAIL);
    } catch {
      setToast(EMAIL);
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 2400);
  }, [t]);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <Stats />
        <Work />
        <LayersScene />
        <ApiDemo />
        <Experience />
        <Contact onCopy={copyEmail} />
      </main>
      <div className="toast" role="status" aria-live="polite" hidden={!toast}>{toast}</div>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
