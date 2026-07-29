import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { useTheme } from "../hooks/useTheme";
import styles from "./Navbar.module.css";

// Enlaces del menú. Si quieres añadir/quitar una sección del menú,
// edita este array (no hace falta tocar el JSX de abajo).
//
// Usamos "/#about" (con la barra al inicio) en vez de solo "#about"
// porque el Navbar es visible en TODAS las páginas del sitio, incluida
// la página de detalle de un proyecto (/proyectos/:slug). Con <Link>
// de react-router-dom, si ya estamos en la página principal el enlace
// simplemente baja hasta esa sección; si estamos en otra página, primero
// navega de vuelta a "/" y desde ahí baja hasta la sección (ver el hook
// useScrollToHash, que se encarga de ese scroll).
const NAV_LINKS = [
  { href: "/#about", label: "Perfil" },
  { href: "/#skills", label: "Stack" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#contact", label: "Contacto" },
];

/**
 * Navbar
 * ------
 * Barra de navegación fija en la parte superior.
 *
 * - useScrolled(30) sustituye al listener "window.addEventListener('scroll', ...)"
 *   del main.js original: cuando el usuario baja más de 30px, la barra
 *   oscurece su fondo. El hook nos devuelve simplemente true/false.
 *
 * - useState controla si el menú de móvil (la hamburguesa ☰) está abierto
 *   o cerrado. En React no tocamos el DOM a mano: guardamos "¿está
 *   abierto?" como estado (menuOpen) y dejamos que React decida qué
 *   clase CSS aplicar cada vez que ese estado cambia.
 *
 * - useTheme guarda el tema actual ("dark"/"light") y expone una función
 *   para alternarlo. El botón de sol/luna solo necesita mostrar el icono
 *   contrario al tema activo y llamar a esa función al hacer clic.
 */
export default function Navbar() {
  const scrolled = useScrolled(30);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tema, alternarTema] = useTheme();

  // Si /logo.png todavía no existe (el usuario lo sube después), ocultamos
  // la imagen rota con onError y el nombre de al lado queda como logo.
  const [logoError, setLogoError] = useState(false);

  const navClass = scrolled ? `${styles.nav} ${styles.scrolled}` : styles.nav;
  const linksClass = menuOpen ? `${styles.navLinks} ${styles.open}` : styles.navLinks;

  function cerrarMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={navClass}>
      <div className={styles.navIn}>
        <Link to="/" className={styles.logo} onClick={cerrarMenu}>
          {!logoError && (
            <img
              src="/logo.png"
              alt="Juan David Rodríguez - Analista de Datos"
              className={styles.logoImg}
              onError={() => setLogoError(true)}
            />
          )}
          Juan David Rodríguez
        </Link>

        <div className={styles.navRight}>
          <ul className={linksClass}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {/* Al hacer clic cerramos el menú móvil */}
                <Link to={link.href} onClick={cerrarMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón de tema: alterna entre "dark" y "light" en cada clic */}
          <button
            className={styles.themeToggle}
            onClick={alternarTema}
            aria-label={tema === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            title={tema === "dark" ? "Tema claro" : "Tema oscuro"}
          >
            {tema === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Cada clic invierte el valor anterior (abierto -> cerrado y viceversa) */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
