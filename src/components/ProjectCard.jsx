import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ImageOff } from "lucide-react";
import TechIcon from "./TechIcon";
import styles from "./ProjectCard.module.css";

// Texto de la etiqueta de estado según el campo `status` del proyecto.
const STATUS_LABEL = {
  live: "Proyecto destacado",
  soon: "Próximamente",
};

/**
 * ProjectCard
 * -----------
 * Tarjeta reutilizable para UN proyecto. En vez de escribir el mismo
 * bloque de JSX una vez por cada proyecto, este componente recibe el
 * proyecto completo como prop (`project`, un objeto de
 * src/data/projects.js) y decide cómo pintarlo. Todas las tarjetas miden
 * lo mismo (mismo alto de bloque): la rejilla de Projects.module.css las
 * estira para que ocupen toda la fila, y aquí dentro usamos flexbox para
 * que el enlace del pie quede siempre pegado al fondo de la tarjeta.
 *
 * - `imgError` (useState) controla si la imagen del proyecto falló al
 *   cargar (por ejemplo, porque todavía no se subió a public/proyectos/).
 *   Si falla, mostramos un placeholder decorativo en su lugar en vez de
 *   dejar ver el icono de "imagen rota" del navegador.
 * - Un enlace del pie ("Ver proyecto" / "Código") solo queda activo
 *   cuando el proyecto está en status "live" Y además tiene esa url.
 */
export default function ProjectCard({ project }) {
  const { nombre, fecha, img, problema, descripcion, tecnologias, urlDetalle, urlGithub, status } = project;
  const [imgError, setImgError] = useState(false);
  const isLive = status === "live";

  const statusClass = isLive ? `${styles.status} ${styles.live}` : `${styles.status} ${styles.soon}`;
  const verProyectoActivo = isLive && Boolean(urlDetalle);
  const githubActivo = isLive && Boolean(urlGithub);

  return (
    <article className={`${styles.card} reveal`}>
      <div className={styles.thumb}>
        <span className={statusClass}>{STATUS_LABEL[status]}</span>

        {!imgError ? (
          <img
            src={img}
            alt={`Captura del proyecto ${nombre}`}
            className={styles.thumbImg}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className={styles.placeholder}>
            <ImageOff size={30} />
          </span>
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.fecha}>
          <Calendar size={13} />
          {fecha}
        </span>
        <h3>{nombre}</h3>
        <p className={styles.description}>{descripcion}</p>

        <p className={styles.problema}>{problema}</p>

        <div className={styles.stack}>
          {tecnologias.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {verProyectoActivo ? (
            <Link to={urlDetalle}>
              <ArrowRight size={15} /> Ver Proyecto
            </Link>
          ) : (
            <span className={styles.disabled}>
              <ArrowRight size={15} /> Ver Proyecto
            </span>
          )}

          {githubActivo ? (
            <a href={urlGithub} target="_blank" rel="noopener noreferrer">
              <TechIcon icono={{ tipo: "simple", valor: "github" }} size={14} /> Código
            </a>
          ) : (
            <span className={styles.disabled}>
              <TechIcon icono={{ tipo: "simple", valor: "github" }} size={14} /> Código
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
