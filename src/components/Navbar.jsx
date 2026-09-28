import { useEffect, useState } from "react";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Destaca o link da seção que está visível
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => { const el = document.getElementById(l.id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <nav className="container nav-inner" aria-label="Navegação principal">
        <a href="#top" className="logo">m<span>4</span>.dev</a>
        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
