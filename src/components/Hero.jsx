/* =========================================================================
   Hero.jsx  ·  Sección de portada del portafolio
   -------------------------------------------------------------------------
   Todo centrado en una sola columna: badge, titular, botones de contacto
   y etiquetas de tecnología. La foto de perfil vive ahora en la sección
   Perfil (About.jsx), no aquí.
   ========================================================================= */

import { FolderOpen, Download } from "lucide-react";
import TechIcon from "./TechIcon";
import { CONTACT } from "../data/contact";
import styles from "./Hero.module.css";

// Tecnologías destacadas que se muestran como etiquetas bajo los botones.
// Cada una trae su propio logo monocromático (ver TechIcon.jsx): "simple"
// pide el logo real de la marca, "lucide" usa un icono genérico cuando la
// tecnología no es una marca (como el caso de "SQL").
const TECNOLOGIAS_HERO = [
  { nombre: "Python", icono: { tipo: "simple", valor: "python" } },
  { nombre: "SQL", icono: { tipo: "lucide", valor: "Database" } },
  { nombre: "Power BI", icono: { tipo: "simple", valor: "powerbi" } },
  { nombre: "Excel", icono: { tipo: "simple", valor: "microsoftexcel" } },
  { nombre: "Pandas", icono: { tipo: "simple", valor: "pandas" } },
  { nombre: "NumPy", icono: { tipo: "simple", valor: "numpy" } },
  { nombre: "SQL Server", icono: { tipo: "simple", valor: "microsoftsqlserver" } },
];

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="wrap">
        <div className={styles.content}>

          {/* Badge de disponibilidad — el puntito que late y el brillo
              detrás los anima el CSS (ver .tagGlow y @keyframes pulse) */}
          <div className={`${styles.tagWrap} reveal`}>
            <div className={styles.tagGlow}></div>
            <div className={styles.tag}>
              <span className={styles.pulse}></span>
              Disponible para nuevas oportunidades
            </div>
          </div>

          {/* Titular: resumen rápido del perfil. Los separadores "|" van en
              un <span> aparte para pintarlos del color de acento. El <br/>
              fuerza el salto exactamente entre "Automatización" y "Business
              Intelligence" para que el titular quede siempre en 2 líneas
              equilibradas en escritorio (en vez de depender de que el texto
              rompa "solo" donde el ancho disponible lo decida). */}
          <h1 className={`${styles.title} reveal`}>
            Analista de Datos <span className={styles.sep}>|</span> Automatización
            <br />
            Business Intelligence <span className={styles.sep}>|</span> Python &amp; SQL
          </h1>

          {/* Botones de acción rápida, cada uno con su icono a la izquierda */}
          <div className={`${styles.actions} reveal`}>
            <a href="#projects" className="btn btn-primary">
              <FolderOpen size={16} />
              Ver proyectos
            </a>
            <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <TechIcon icono={{ tipo: "simple", valor: "linkedin" }} />
              LinkedIn
            </a>
            <a href={CONTACT.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <TechIcon icono={{ tipo: "simple", valor: "github" }} />
              GitHub
            </a>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <TechIcon icono={{ tipo: "simple", valor: "whatsapp" }} />
              WhatsApp
            </a>
            <a href={CONTACT.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Download size={16} />
              Descargar CV
            </a>
          </div>

          {/* Etiquetas de tecnologías básicas: logo + nombre */}
          <ul className={`${styles.techList} reveal`}>
            {TECNOLOGIAS_HERO.map((tech) => (
              <li key={tech.nombre} className={styles.techItem}>
                <TechIcon icono={tech.icono} size={19} />
                {tech.nombre}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </header>
  );
}
