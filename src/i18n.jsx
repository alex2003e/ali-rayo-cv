import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LangContext = createContext({ lang: 'es', setLang: () => {}, t: (v) => v });

// Un texto puede ser un string fijo o un objeto { es, en }.
export function pick(value, lang) {
  if (value == null || typeof value === 'string' || typeof value === 'number') return value;
  return value[lang] ?? value.es;
}

const TITLES = {
  es: 'Ali Rayo · Backend sólido, interfaz con criterio',
  en: 'Ali Rayo · Solid backend, thoughtful interfaces',
};

export function LangProvider({ children }) {
  // El HTML se pre-renderiza en español; el idioma guardado se aplica al hidratar.
  const [lang, setLangState] = useState('es');

  useEffect(() => {
    let start = new URLSearchParams(window.location.search).get('lang');
    if (!start) {
      try { start = localStorage.getItem('lang'); } catch { /* almacenamiento bloqueado */ }
    }
    if (start === 'en') setLangState('en');
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = TITLES[lang];
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try { localStorage.setItem('lang', next); } catch { /* sin almacenamiento */ }
    const url = new URL(window.location.href);
    if (next === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    window.history.replaceState(null, '', url);
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: (v) => pick(v, lang) }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
