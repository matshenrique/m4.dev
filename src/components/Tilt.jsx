import { useRef } from "react";

// Efeito 3D que inclina o elemento conforme a posição do mouse + spotlight (--mx/--my).
export default function Tilt({ children, className = "", max = 8, as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => { ref.current.style.transform = ""; };

  return (
    <Tag ref={ref} className={className} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      {children}
    </Tag>
  );
}
