import SectionHeader from "./SectionHeader";
import { education } from "../data/education";
import styles from "./Education.module.css";

/**
 * Education
 * ---------
 * Sección "Estudios": tarjetas simples y limpias, una por cada título
 * cursado. Recorre `education` (src/data/education.js) con .map(); si
 * un estudio no tiene "detalle" (como el segundo, ya finalizado) esa
 * línea simplemente no se pinta gracias al "&&" antes de <p>.
 */
export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className="wrap">
        <SectionHeader kicker="Formación" />

        <div className={styles.grid}>
          {education.map((item) => (
            <div key={item.id} className={`${styles.card} reveal`}>
              <span className={styles.periodo}>{item.periodo}</span>
              <h3>{item.titulo}</h3>
              <span className={styles.institucion}>{item.institucion}</span>
              {item.detalle && <p className={styles.detalle}>{item.detalle}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
