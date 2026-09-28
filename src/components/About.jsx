import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../data.js";

// Contador animado que só dispara quando entra na tela
function Count({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || typeof value !== "number") return;
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame++;
      setN(Math.round((value * frame) / total));
      if (frame >= total) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [inView, value]);

  return <b ref={ref} className="grad">{typeof value === "number" ? n : value}</b>;
}

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <h2 className="section-title">Sobre mim</h2>
        <p className="section-sub">Quem está por trás do código.</p>
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
          >
            {profile.about.map((t) => <p key={t}>{t}</p>)}
            <p>📍 {profile.location}</p>
          </motion.div>
          <div className="stats">
            {profile.stats.map((s, i) => (
              <motion.div
                key={s.label} className="glass stat"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <span>{s.label}</span>
                <Count value={s.value} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
