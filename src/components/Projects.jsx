import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

/**
 * Projects
 * --------
 * Sección "Proyectos". Recorre el array `projects` (src/data/projects.js)
 * con .map() y pinta una <ProjectCard> por cada uno.
 *
 * Para añadir un proyecto nuevo: agrega un objeto a src/data/projects.js.
 * Este componente no necesita ningún cambio.
 */
export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="wrap">
        <SectionHeader kicker="PROYECTOS"  />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}