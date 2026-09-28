import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "./Tilt.jsx";
import { profile } from "../data.js";

// Efeito de digitação que alterna entre os cargos
function useTyping(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0, j = 0, del = false, t;
    const tick = () => {
      const word = words[i];
      j += del ? -1 : 1;
      setText(word.slice(0, j));
      let delay = del ? 35 : 70;
      if (!del && j === word.length) { del = true; delay = 1500; }
      else if (del && j === 0) { del = false; i = (i + 1) % words.length; delay = 350; }
      t = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="top" className="hero" style={{ position: "relative" }}>
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Olá, eu sou o <span className="grad">{profile.name}</span>
          </h1>
          <p className="hero-role" aria-label={profile.roles.join(", ")}>
            {typed}<span className="caret" />
          </p>
          <p className="lead">{profile.summary}</p>
          <div className="hero-cta">
            <a href="#projetos" className="btn btn-primary">Ver projetos</a>
            <a href="#contato" className="btn btn-ghost">Falar comigo</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <Tilt className="terminal" max={10}>
            <div className="terminal-bar"><i /><i /><i /></div>
<pre>{`const `}<span className="k">dev</span>{` = {
  nome: `}<span className="s">"Matheus Henrique"</span>{`,
  foco: [`}<span className="s">"React"</span>{`, `}<span className="s">"Node.js"</span>{`],
  estudando: `}<span className="s">"Back-end"</span>{`,
  local: `}<span className="s">"Recife, PE"</span>{`,
  disponivel: `}<span className="k">true</span>{`
};

`}<span className="c">// vamos construir algo juntos?</span></pre>
          </Tilt>
        </motion.div>
      </div>
      <span className="scroll-hint" aria-hidden="true" />
    </section>
  );
}
