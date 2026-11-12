import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { useReducedMotion } from '../hooks.js';
import { demoSteps, hops, ui } from '../data.js';

// Construye la lista de pasos como datos; el render solo los dibuja.
function buildScript(kind, s) {
  const req = { type: 'req' };
  const steps = [
    { line: req, hop: [0, 'on'] },
    { line: { type: 'ok', text: s.val, ms: 2 }, hop: [1, 'on'] },
  ];
  if (kind === 'expired') {
    steps.push(
      { line: { type: 'err', text: s.exp, ms: 1 }, hop: [2, 'bad'] },
      { line: { type: 'res401' } },
      { line: { type: 'comment', text: s.refresh } },
      { line: { type: 'ok', text: s.newtok, ms: 6 }, hop: [2, 'on'] },
      { line: { type: 'req', retry: true } },
    );
  } else {
    steps.push({ line: { type: 'ok', text: s.jwt, ms: 1 }, hop: [2, 'on'] });
  }
  steps.push(
    { line: { type: 'ok', text: s.rule, ms: 4 }, hop: [3, 'on'] },
    { line: { type: 'ok', text: s.db, ms: 11 }, hop: [4, 'on'] },
    { line: { type: 'ok', text: s.q, ms: 3 }, hop: [5, 'on'] },
    { line: { type: 'res201', ms: kind === 'expired' ? 31 : 24 }, done: true },
  );
  return steps;
}

function Line({ line, retryLabel }) {
  switch (line.type) {
    case 'req':
      return <span className="line">→ <span className="k">POST</span> /api/v1/orders  <span className="dim">{'{"items":2,"table":7}'}</span>{line.retry && <span className="dim">  ({retryLabel})</span>}</span>;
    case 'ok':
      return <span className="line"><span className="ok">✓</span> {line.text}<span className="t">{line.ms} ms</span></span>;
    case 'err':
      return <span className="line"><span className="err">✗</span> {line.text}<span className="t">{line.ms} ms</span></span>;
    case 'res401':
      return <span className="line"><span className="err">← 401 Unauthorized</span>  <span className="dim">{'{"error":"token_expired"}'}</span></span>;
    case 'comment':
      return <span className="line dim">// {line.text}</span>;
    case 'res201':
      return <span className="line"><span className="ok">← 201 Created</span>  <span className="dim">{'{"id":"ord_8F2K","status":"confirmed"}'}</span><span className="t">{line.ms} ms</span></span>;
    default:
      return null;
  }
}

export default function ApiDemo() {
  const { lang, t } = useLang();
  const reduce = useReducedMotion();
  const [lines, setLines] = useState([]);
  const [hopState, setHopState] = useState({});
  const [running, setRunning] = useState(false);
  const timers = useRef([]);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => clear, []);
  // Al cambiar de idioma se reinicia para no mezclar textos.
  useEffect(() => { clear(); setLines([]); setHopState({}); setRunning(false); }, [lang]);

  const run = (kind) => {
    clear();
    setLines([]); setHopState({}); setRunning(true);
    const script = buildScript(kind, demoSteps[lang]);
    const gap = reduce ? 0 : 520;
    script.forEach((step, i) => {
      timers.current.push(setTimeout(() => {
        setLines((prev) => [...prev, step.line]);
        if (step.hop) setHopState((prev) => ({ ...prev, [step.hop[0]]: step.hop[1] }));
        if (step.done) setRunning(false);
      }, i * gap));
    });
  };

  return (
    <section className="wrap sec demo" id="demo" aria-labelledby="h-demo">
      <div>
        <h2 id="h-demo">{t(ui.demoTitle)}</h2>
        <p className="sub">{t(ui.demoSub)}</p>
        <div className="actions">
          <button className="btn primary" type="button" disabled={running} onClick={() => run('ok')}>{t(ui.sendReq)}</button>
          <button className="btn" type="button" disabled={running} onClick={() => run('expired')}>{t(ui.sendExpired)}</button>
        </div>
      </div>
      <div className="term">
        <div className="term-top"><i /><i /><i /><span>api.forno-doro · orders</span><em>{t(ui.simulation)}</em></div>
        <pre className="log" aria-live="polite">
          {lines.length === 0
            ? <span className="dim">{demoSteps[lang].idle}</span>
            : lines.map((l, i) => <Line key={i} line={l} retryLabel={demoSteps[lang].retry} />)}
        </pre>
        <div className="hops">
          {hops.map((h, i) => <span key={i} className={hopState[i] || ''}>{t(h)}</span>)}
        </div>
      </div>
    </section>
  );
}
