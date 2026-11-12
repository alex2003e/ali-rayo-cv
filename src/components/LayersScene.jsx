import { useCallback, useRef, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { useReducedMotion, useScrollProgress } from '../hooks.js';
import { layers, ui } from '../data.js';

const SPREAD_END = 0.25; // primer cuarto del scroll: las capas se separan
const STEP = (1 - SPREAD_END) / layers.length;

export default function LayersScene() {
  const { t } = useLang();
  const sceneRef = useRef(null);
  const isoRef = useRef(null);
  const [active, setActive] = useState(0);
  const [hintHidden, setHintHidden] = useState(false);
  const reduce = useReducedMotion();

  // La separación se escribe como variable CSS (sin re-render por frame);
  // solo el índice activo, que cambia 4 veces, pasa por el estado de React.
  const onProgress = useCallback((p) => {
    isoRef.current?.style.setProperty('--p', Math.min(1, p / SPREAD_END).toFixed(3));
    const idx = p < SPREAD_END ? 0 : Math.min(layers.length - 1, Math.floor((p - SPREAD_END) / STEP));
    setActive(idx);
    setHintHidden(p > 0.2);
  }, []);
  useScrollProgress(sceneRef, onProgress, reduce);

  const goTo = (i) => {
    if (reduce) return;
    const el = sceneRef.current;
    const r = el.getBoundingClientRect();
    const total = r.height - window.innerHeight;
    window.scrollTo({ top: window.scrollY + r.top + total * (SPREAD_END + STEP * i + STEP / 2), behavior: 'smooth' });
  };

  const activeLayer = layers[active].i;
  return (
    <section className={`wrap scene ${reduce ? 'static' : ''}`} id="capas" ref={sceneRef} aria-labelledby="h-capas">
      <div className="sticky">
        <div>
          <h2 id="h-capas">{t(ui.layersTitle)}</h2>
          <p className="sub">{t(ui.layersSub)}</p>
          <ol className="ll">
            {layers.map((l, i) => (
              <li key={l.i} className={i === active || reduce ? 'on' : ''} onClick={() => goTo(i)}>
                <h3><span>{t(l.name)}</span><i /></h3>
                <div className="body"><div>
                  <p>{t(l.desc)}</p>
                  <div className="chips">{l.chips.map((c) => <span key={c}>{c}</span>)}</div>
                </div></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="stage" aria-hidden="true">
          <div className="iso" ref={isoRef} style={reduce ? { '--p': 1 } : undefined}>
            {[...layers].reverse().map((l) => (
              <div key={l.i} className={`sl s${l.i} ${!reduce && l.i === activeLayer ? 'on' : ''}`} style={{ '--i': l.i }}>
                {l.i === 3 ? <div className="g"><i /><i /><i /><i /><i /><i /></div> : <small>0{4 - l.i}</small>}
                <div><b>{t(l.short)}</b></div>
              </div>
            ))}
          </div>
          <p className="scroll-hint" style={{ opacity: hintHidden ? 0 : 1 }}>{t(ui.scrollHint)}</p>
        </div>
      </div>
    </section>
  );
}
