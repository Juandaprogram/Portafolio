import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { useReveal } from "./hooks/useReveal";
import { useScrollToHash } from "./hooks/useScrollToHash";

/**
 * App
 * ---
 * Componente raíz de la aplicación. El Navbar y el Footer se pintan
 * siempre, en todas las páginas; entre ellos, <Routes> decide qué
 * página mostrar según la URL:
 *   "/"                  → Home (todas las secciones del portafolio)
 *   "/proyectos/:slug"   → ProjectDetail (el detalle de un proyecto)
 *
 * useRef crea "rootRef": una caja que guarda una referencia directa al
 * <div> del DOM que envuelve toda la página, sin que React vuelva a
 * renderizar el componente cuando esa referencia se usa (a diferencia
 * de useState, useRef no dispara un nuevo render).
 *
 * Se la pasamos a useReveal, que busca dentro de ese div todos los
 * elementos con className="reveal" (repartidos por Hero, About, Skills,
 * etc.) y les activa la animación de aparición al hacer scroll.
 *
 * useScrollToHash hace que los enlaces del Navbar (que apuntan a
 * "/#skills", "/#projects"...) bajen suavemente hasta esa sección
 * incluso cuando se hace clic desde otra página (como el detalle de un
 * proyecto).
 */
export default function App() {
  const rootRef = useRef(null);
  useReveal(rootRef);
  useScrollToHash();

  return (
    <div ref={rootRef}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
