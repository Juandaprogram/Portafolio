import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

/**
 * Home
 * ----
 * Página principal: agrupa TODAS las secciones de la página de inicio,
 * en el orden final acordado:
 * Hero → Perfil → Stack → Proyectos → Estudios → Certificaciones → Contacto.
 *
 * El Navbar y el Footer NO viven aquí: se pintan siempre, en todas las
 * páginas (incluida /proyectos/:slug), desde App.jsx. Así evitamos
 * duplicarlos y el usuario siempre ve la barra de navegación y el pie
 * de página sin importar en qué ruta esté.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
