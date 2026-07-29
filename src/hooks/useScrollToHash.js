import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollToHash
 * ----------------
 * El Navbar enlaza a secciones como "/#skills". Si ya estamos en la
 * página principal, el navegador podría bajar solo, pero si venimos de
 * otra ruta (por ejemplo /proyectos/mi-proyecto) react-router primero
 * navega a "/" y el navegador NO sabe que además debe bajar hasta
 * "#skills": ese trabajo lo hace este hook.
 *
 * useLocation() nos da la URL actual (incluido el "hash", la parte
 * después del #). Cada vez que ese hash cambia, buscamos el elemento
 * con ese id en el documento y lo desplazamos a la vista con un scroll
 * suave (el mismo efecto que ya usa el resto del sitio gracias a
 * "scroll-behavior: smooth" en styles/global.css).
 */
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const elemento = document.querySelector(hash);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
}
