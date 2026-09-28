import { motion } from "framer-motion";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">As tecnologias que uso e as que estou aprofundando.</p>
        <div className="skill-groups">
          {skills.map((g, i) => (
            <motion.div
              key={g.group} className="glass skill-group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
