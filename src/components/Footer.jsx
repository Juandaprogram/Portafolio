import styles from "./Footer.module.css";

/**
 * Footer
 * ------
 * Pie de página: dos líneas centradas con el nombre/ubicación y una
 * frase corta que resume el sitio. Contenido estático y simple: no
 * necesita estado ni efectos.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p>Juan David Rodríguez · Bogotá, Colombia</p>
        <p>Portafolio Analista de Datos</p>
      </div>
    </footer>
  );
}
