import { useEffect, useRef, useState } from 'react';

// Respeta la preferencia del sistema de reducir animaciones.
export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const on = (e) => setReduce(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduce;
}

// Inclina un elemento según el cursor escribiendo variables CSS directamente,
// sin volver a renderizar React en cada movimiento.
export function usePointerTilt(areaRef, targetRef, { baseX = 8, baseY = -14, range = 18 } = {}, disabled = false) {
  useEffect(() => {
    const area = areaRef.current;
    const target = targetRef.current;
    if (!area || !target || disabled) return undefined;
    let frame = 0;
    const move = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = area.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        target.style.setProperty('--ry', `${baseY + x * range}deg`);
        target.style.setProperty('--rx', `${baseX - y * (range * 0.66)}deg`);
      });
    };
    const leave = () => {
      cancelAnimationFrame(frame);
      target.style.removeProperty('--ry');
      target.style.removeProperty('--rx');
    };
    area.addEventListener('pointermove', move);
    area.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(frame);
      area.removeEventListener('pointermove', move);
      area.removeEventListener('pointerleave', leave);
    };
  }, [areaRef, targetRef, baseX, baseY, range, disabled]);
}

// Progreso del scroll (0 a 1) dentro de una sección alta. Llama a onProgress
// en cada frame; el componente decide qué guardar en el estado.
export function useScrollProgress(ref, onProgress, disabled = false) {
  const cb = useRef(onProgress);
  cb.current = onProgress;
  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return undefined;
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      cb.current(p);
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [ref, disabled]);
}

// Qué sección está a la vista, para marcar el menú.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}
