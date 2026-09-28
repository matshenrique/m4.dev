import { useEffect, useRef } from "react";

// Rede de partículas neon que reage ao mouse (e ao toque).
export default function ParticleBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let w, h, particles, raf;
    const colors = ["#b56cff", "#ff3df0", "#5cf2ff"];

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((w * h) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6, c: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // repulsão suave perto do cursor
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 130) { p.vx += (dx / d) * 0.05; p.vy += (dy / d) * 0.05; }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c; ctx.shadowColor = p.c; ctx.shadowBlur = 10;
        ctx.fill(); ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j], dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(181,108,255,${0.16 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const move = (e) => {
      const t = e.touches ? e.touches[0] : e;
      mouse.x = t.clientX; mouse.y = t.clientY;
    };
    const leave = () => { mouse.x = mouse.y = -9999; };

    init(); draw();
    window.addEventListener("resize", init);
    window.addEventListener("pointermove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas ref={ref} className="bg-canvas" aria-hidden="true" />;
}
