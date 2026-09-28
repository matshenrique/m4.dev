import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tilt from "./Tilt.jsx";
import { projects } from "../data.js";

export default function Projects() {
  const categories = useMemo(() => ["Todos", ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState("Todos");
  const visible = projects.filter((p) => filter === "Todos" || p.category === filter);

  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2 className="section-title">Projetos em destaque</h2>
        <p className="section-sub">Uma seleção do que já construí. Cada card leva ao código no GitHub.</p>

        <div className="filters" role="tablist" aria-label="Filtrar projetos">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={filter === c}
              className={`filter ${filter === c ? "on" : ""}`} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.title} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35 }}
              >
                <Tilt className="glass card" max={7}>
                  <div className="card-top">
                    <span className="badge">{p.highlight}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="chips">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <a className="card-link" href={p.repo} target="_blank" rel="noreferrer">
                    Ver no GitHub <span aria-hidden="true">↗</span>
                  </a>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p style={{ marginTop: 32 }}>
          <a className="card-link" href="https://github.com/matshenrique?tab=repositories" target="_blank" rel="noreferrer">
            Ver todos os repositórios <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
}
