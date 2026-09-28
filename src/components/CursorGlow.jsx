import { useEffect, useRef } from "react";

// Halo de luz que segue o cursor (desaparece em telas de toque via CSS).
export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let x = 0, y = 0, cx = 0, cy = 0, raf;
    const move = (e) => { x = e.clientX - 230; y = e.clientY - 230; };
    const loop = () => {
      cx += (x - cx) * 0.12; cy += (y - cy) * 0.12; // suavização
      el.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); };
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
