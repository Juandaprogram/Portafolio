import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/variables.css";
import "./styles/global.css";

/**
 * main.jsx
 * --------
 * Punto de entrada de la aplicación. Vite lo carga desde index.html
 * (<script type="module" src="/src/main.jsx">). Aquí:
 *
 * 1. Importamos los estilos globales (las variables de color/fuentes y
 *    el reset + clases compartidas) para que se apliquen a toda la app.
 * 2. Envolvemos <App> en <BrowserRouter>: es lo que le da a toda la app
 *    la capacidad de tener varias "páginas" (rutas) dentro del mismo
 *    sitio, como "/" y "/proyectos/:slug", sin recargar el navegador.
 * 3. "Montamos" ese árbol dentro del <div id="root"> que existe en
 *    index.html, usando createRoot(...).render(...): esa es la API de
 *    React que conecta nuestros componentes con el DOM real.
 *
 * <StrictMode> es una ayuda de React que solo actúa en desarrollo: no
 * cambia nada visual, pero ejecuta ciertas comprobaciones extra para
 * detectar errores comunes más temprano.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);