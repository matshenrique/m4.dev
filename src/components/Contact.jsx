import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`; // fallback
    }
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <motion.div
          className="glass contact"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
        >
          <h2>Vamos <span className="grad">conversar?</span></h2>
          <p>Estou aberto a oportunidades e projetos. Me chame pelo canal que preferir.</p>
          <div className="contact-actions">
            <button className="btn btn-primary" onClick={copy}>Copiar e-mail</button>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {copied && (
          <motion.div className="toast" role="status"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            E-mail copiado
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
