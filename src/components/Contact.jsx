import { Mail, Download } from "lucide-react";
import TechIcon from "./TechIcon";
import { CONTACT } from "../data/contact";
import styles from "./Contact.module.css";

/**
 * Contact
 * -------
 * Sección final de llamado a la acción, con TODOS los enlaces de
 * contacto: correo, LinkedIn, GitHub, WhatsApp y descargar CV. Cada
 * enlace es una pequeña tarjeta con su icono en un círculo y el nombre
 * debajo; la de "Escríbeme" lleva un tono de acento para destacarla como
 * la acción principal. Es contenido estático (todavía no hay un
 * formulario), así que no necesita useState ni useEffect. Los datos
 * reales (correo, teléfono, urls) viven en src/data/contact.js para no
 * repetirlos en varios archivos.
 */
export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <div className={`${styles.card} reveal`}>
          <div className={styles.glow}></div>

          <h2>¿Hablamos de datos?</h2>
          <p>
            Estoy disponible para nuevas oportunidades en análisis de datos, Business Intelligence
            y automatización de procesos. Si buscas a alguien que convierta información en
            decisiones, conectemos.
          </p>

          <div className={styles.grid}>
            <a href={`mailto:${CONTACT.email}`} className={`${styles.item} ${styles.primary}`}>
              <span className={styles.iconWrap}>
                <Mail size={20} />
              </span>
              Escríbeme
            </a>
            <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.item}>
              <span className={styles.iconWrap}>
                <TechIcon icono={{ tipo: "simple", valor: "linkedin" }} size={20} />
              </span>
              LinkedIn
            </a>
            <a href={CONTACT.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.item}>
              <span className={styles.iconWrap}>
                <TechIcon icono={{ tipo: "simple", valor: "github" }} size={20} />
              </span>
              GitHub
            </a>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.item}>
              <span className={styles.iconWrap}>
                <TechIcon icono={{ tipo: "simple", valor: "whatsapp" }} size={20} />
              </span>
              WhatsApp
            </a>
            <a href={CONTACT.cvUrl} target="_blank" rel="noopener noreferrer" className={styles.item}>
              <span className={styles.iconWrap}>
                <Download size={20} />
              </span>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
