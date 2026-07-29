import SectionHeader from "./SectionHeader";
import styles from "./About.module.css";

/**
 * About
 * -----
 * Sección "Perfil": a la izquierda la foto de perfil (con el mismo halo
 * animado que antes vivía en la portada) y el nombre debajo con un
 * degradado animado; a la derecha el texto de presentación. Contenido
 * estático: no hace falta useState ni useEffect porque no cambia
 * mientras el usuario interactúa ni depende de nada externo.
 */
export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="wrap">
        <SectionHeader kicker="Perfil" />

        <div className={styles.grid}>
          {/* ---------- Columna izquierda: foto + nombre ---------- */}
          <div className={`${styles.photoCol} reveal`}>
            <div className={styles.photoWrap}>
              <div className={styles.photoGlow}></div>
              <div className={styles.photoRing}>
                <img
                  src="/JDMR.jpeg"
                  alt="Juan David Rodríguez, Analista de Datos"
                  className={styles.photo}
                />
              </div>
            </div>
            <h3 className={styles.name}>Juan David Rodríguez</h3>
          </div>

          {/* ---------- Columna derecha: texto de presentación ---------- */}
          <div className={`${styles.text} reveal`}>
            <div className={styles.roleKicker}>Analista de Datos y Automatización de Procesos</div>
            <p>
              Ingeniero de Sistemas con <b>3 años de experiencia</b> transformando datos dispersos en soluciones 
              operativas eficientes. Me apasiona automatizar flujos de trabajo de punta a punta integrando 
              herramientas como <b>Python, Pandas, SQL Server y Power BI</b>, para lograr procesos más ágiles, 
              confiables y trazables.
            </p>
            <p>
              Mi enfoque está en la <b>reducción de tiempos, costos y errores operativos</b>, construyendo soluciones 
              que convierten la información en decisiones estratégicas. asimismo, exploro constantemente nuevas 
              metodologías y tecnologías para impulsar la mejora continua y la innovación en cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
