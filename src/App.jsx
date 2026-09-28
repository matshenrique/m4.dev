import { motion, useScroll, useSpring } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  // Barra de progresso de rolagem no topo
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} Matheus Henrique. Feito com React.</footer>
    </>
  );
}
