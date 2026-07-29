import { useEffect, useState } from "react";

/*
 * useScrolled
 * -----------
 * Hook personalizado ("custom hook": una función que empieza con "use" y
 * reutiliza lógica con estado/efectos de React). Este calcula si la
 * página ya se desplazó más de "threshold" píxeles hacia abajo.
 *
 * En el main.js original esto era un simple listener:
 *   window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30))
 * En React no manipulamos el DOM a mano: guardamos la respuesta (true/false)
 * en un estado con useState, y es React quien vuelve a pintar la Navbar
 * con la clase correcta cuando ese estado cambia.
 *
 * ¿Por qué useState? Porque "¿hicimos scroll o no?" es un valor que
 * cambia con el tiempo y del que depende lo que se pinta en pantalla
 * (el fondo de la barra). React necesita saber que cambió para
 * re-renderizar el componente que lo usa.
 *
 * ¿Por qué useEffect? Porque suscribirse a un evento del navegador
 * (window.addEventListener) es un "efecto secundario": código que toca
 * algo fuera de React (el objeto window). useEffect es el lugar donde
 * React permite ese tipo de código, y su función de retorno (cleanup)
 * es donde quitamos el listener para no acumularlos si el componente
 * se desmonta y se vuelve a montar.
 */
export function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup: se ejecuta al desmontar el componente (o si "threshold"
    // cambiara). Sin esto, cada vez que el componente se recreara
    // quedaría un listener "fantasma" escuchando de más.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}