import SectionHeader from "./SectionHeader";
import { certifications } from "../data/certifications";
import styles from "./Certifications.module.css";

/**
 * Certifications
 * --------------
 * Sección "Certificaciones": tarjetas con la imagen del badge, el
 * título y el emisor; toda la tarjeta es un enlace que abre en pestaña
 * nueva (sea una insignia de Credly o un PDF subido a public/certs/).
 *
 * Como todavía no hay certificaciones cargadas, `certifications` (ver
 * src/data/certifications.js) empieza vacío: en ese caso mostramos un
 * aviso simple en vez de una rejilla vacía, para que la sección nunca
 * se vea "rota". En cuanto agregues la primera certificación al array,
 * este mensaje desaparece solo y se muestra la tarjeta.
 */
export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className="wrap">
        <SectionHeader kicker="Certificaciones" />

        {certifications.length === 0 ? (
          <p className={`${styles.empty} reveal`}>Certificaciones en camino — próximamente.</p>
        ) : (
          <div className={styles.grid}>
            {certifications.map((cert) => (
              <a
                key={cert.titulo}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} reveal`}
              >
                <img src={cert.img} alt={`Insignia de ${cert.titulo}`} className={styles.badge} />
                <h3>{cert.titulo}</h3>
                <span className={styles.emisor}>{cert.emisor} · {cert.fecha}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
