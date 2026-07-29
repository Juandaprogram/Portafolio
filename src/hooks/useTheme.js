import { useEffect, useState } from "react";

// Clave con la que guardamos la preferencia de tema en el navegador.
const STORAGE_KEY = "jdr-theme";

// Lee el tema guardado la primera vez que se monta el componente que use
// este hook. Si el usuario nunca lo cambió, usamos "dark" (el tema con el
// que se diseñó el sitio originalmente).
function leerTemaGuardado() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  return guardado === "light" || guardado === "dark" ? guardado : "dark";
}

/**
 * useTheme
 * --------
 * Hook personalizado para el interruptor de tema claro/oscuro.
 *
 * - useState guarda cuál es el tema actual ("dark" o "light"). Cuando
 *   cambia, React vuelve a renderizar el botón (para mostrar el icono
 *   correcto: sol o luna).
 * - useEffect es quien "conecta" ese estado con el mundo exterior a
 *   React: escribe el atributo data-theme en <html> (de ahí lo leen
 *   TODAS las variables CSS de variables.css) y guarda la preferencia
 *   en localStorage para que se recuerde la próxima vez que el usuario
 *   visite la página.
 *
 * Devuelve [tema, alternarTema] para usarlo así en un componente:
 *   const [tema, alternarTema] = useTheme();
 */
export function useTheme() {
  const [tema, setTema] = useState(leerTemaGuardado);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem(STORAGE_KEY, tema);
  }, [tema]);

  function alternarTema() {
    setTema((actual) => (actual === "dark" ? "light" : "dark"));
  }

  return [tema, alternarTema];
}
