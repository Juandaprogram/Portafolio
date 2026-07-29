import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * useReveal
 * ---------
 * Reproduce la animación de aparición al hacer scroll que en la versión
 * original vivía al final de main.js. La idea no cambia: cualquier
 * elemento con className="reveal" arranca invisible y desplazado (eso
 * lo define el CSS en styles/global.css), y en cuanto entra en la
 * pantalla le añadimos la clase "in" para que el CSS lo anime.
 *
 * Recibe "containerRef": una referencia (useRef) al elemento contenedor
 * donde hay que buscar los ".reveal". La usa App.jsx, pasándole una
 * referencia al div que envuelve toda la página.
 *
 * ¿Por qué useEffect y no useState? Porque aquí no hay ningún valor que
 * decida qué pintar en el JSX (no hay un "if" que dependa de esto): solo
 * necesitamos ejecutar código que se conecta con el DOM real (crear un
 * IntersectionObserver, que es una API del navegador). Ese tipo de
 * código "de conexión con el mundo exterior" es exactamente para lo que
 * sirve useEffect.
 *
 * ¿Por qué también depende de "pathname"? Como el sitio ahora tiene
 * rutas (react-router-dom), al navegar a /proyectos/:slug y volver a
 * "/" React vuelve a crear los elementos de Home (Hero, About, etc.)
 * desde cero. Sin este dependencia, el observer original —creado una
 * sola vez al montar la app— nunca se enteraría de esos elementos
 * nuevos y se quedarían invisibles para siempre. Al incluir "pathname"
 * en las dependencias, cada vez que cambia la ruta se limpia el
 * observer anterior (la función de cleanup) y se crea uno nuevo que
 * vuelve a buscar los ".reveal" que existan en ese momento.
 */
export function useReveal(containerRef) {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // isIntersecting es true en cuanto el elemento ya se ve en pantalla.
          if (entry.isIntersecting) {
            entry.target.classList.add("in"); // lo hacemos aparecer
            observer.unobserve(entry.target); // ya apareció: dejamos de vigilarlo
          }
        });
      },
      { threshold: 0.12 } // se activa cuando un 12% del elemento es visible
    );

    // Igual que en el original: cada elemento aparece con un pequeño
    // retraso escalonado (0ms, 55ms, 110ms...) en vez de todos a la vez.
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 5) * 55}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [containerRef, pathname]);
}