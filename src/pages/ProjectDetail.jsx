import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import styles from "./ProjectDetail.module.css";

/**
 * ProjectDetail
 * -------------
 * Página de detalle de UN proyecto, reutilizable para cualquier
 * elemento de src/data/projects.js. La URL es "/proyectos/:slug"
 * (definida en App.jsx); useParams() nos da ese ":slug" tal cual quedó
 * escrito en la barra de direcciones, y con .find() buscamos el
 * proyecto que tenga ese mismo slug en los datos.
 *
 * Si el slug no existe (o alguien escribe una URL inventada), en vez de
 * romper la página mostramos un aviso simple con un enlace de vuelta al
 * inicio.
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [imgError, setImgError] = useState(false);

  if (!project) {
    return (
      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.notFound}>No encontramos este proyecto.</p>
          <Link to="/" className={styles.back}>
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  const {
    nombre,
    fecha,
    img,
    enfoque,
    problema,
    descripcion,
    tecnologias,
    urlGithub,
    status,
    contexto,
    imagenProblema,
    datos,
    solucion,
    imagenesProceso,
    resultados,
    imagenDetalle,
  } = project;
  const githubActivo = status === "live" && Boolean(urlGithub);

  return (
    <section className={styles.section}>
      <div className="wrap">
        <Link to="/#projects" className={styles.back}>
          <ArrowLeft size={16} /> Volver a proyectos
        </Link>

        <div className={styles.enfoque}>
          {enfoque.map((tag) => (
            <span key={tag} className={styles.enfoqueTag}>
              {tag}
            </span>
          ))}
        </div>

        <h1 className={styles.title}>{nombre}</h1>
        <span className={styles.fecha}>{fecha}</span>

        <div className={styles.thumb}>
          {!imgError ? (
            <img
              src={img}
              alt={`Captura del proyecto ${nombre}`}
              className={styles.thumbImg}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className={styles.placeholder}>Vista previa próximamente</span>
          )}
        </div>

        <div className={styles.problema}>
          <span className={styles.problemaLabel}>Problema que resuelve:</span> {problema}
        </div>

        <p className={styles.description}>{descripcion}</p>

        {contexto && (
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>El problema</h2>
            <p className={styles.blockText}>{contexto}</p>
          </div>
        )}

        {imagenProblema && (
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Estructura del problema</h2>
            <img src={imagenProblema} alt={`Estructura del problema de ${nombre}`} className={styles.detailImg} />
          </div>
        )}

        {datos && (
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Los datos</h2>
            <p className={styles.blockText}>{datos}</p>
          </div>
        )}

        {imagenDetalle && (
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Estructura de la solución</h2>
            <img src={imagenDetalle} alt={`Estructura de la solución de ${nombre}`} className={styles.detailImg} />
          </div>
        )}

        {solucion && (
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>La solución</h2>
            {solucion.map((paso) => (
              <div key={paso.titulo} className={styles.step}>
                <h3 className={styles.stepTitle}>{paso.titulo}</h3>
                <p className={styles.blockText}>{paso.texto}</p>
              </div>
            ))}
          </div>
        )}

        {imagenesProceso && imagenesProceso.length > 0 && (
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Resumen del proceso</h2>
            <div className={styles.gallery}>
              {imagenesProceso.map((src, i) => (
                <img key={src} src={src} alt={`Resumen del proceso de ${nombre} ${i + 1}`} className={styles.detailImg} />
              ))}
            </div>
          </div>
        )}

        {resultados && (
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>El resultado</h2>
            <ul className={styles.resultList}>
              {resultados.map((item) => (
                <li key={item} className={styles.resultItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.stack}>
          {tecnologias.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {githubActivo && (
          <a href={urlGithub} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            ⌥ Ver repositorio en GitHub
          </a>
        )}
      </div>
    </section>
  );
}
