import SectionHeader from "./SectionHeader";
import TechIcon from "./TechIcon";
import { stack } from "../data/stack";
import styles from "./Skills.module.css";

/**
 * Skills
 * ------
 * Sección "Stack tecnológico". Los datos vienen agrupados por jerarquía
 * de valor (src/data/stack.js): el primer grupo ("Núcleo") es el que más
 * define a Juan David, así que lo separamos con el array destructuring
 * `[nucleo, ...resto]` y lo pintamos como una franja destacada arriba;
 * los demás grupos se recorren con .map() en una rejilla de tarjetas más
 * pequeñas debajo. Para añadir/quitar una tecnología o un grupo entero,
 * solo hace falta editar stack.js: este componente no cambia.
 */
export default function Skills() {
  const [nucleo, ...resto] = stack;

  return (
    <section id="skills" className={styles.section}>
      <div className="wrap">
        <SectionHeader kicker="Stack técnico" />

        {/* ---------- Grupo "Núcleo": el más importante ---------- */}
        <div className={`${styles.core} reveal`}>
          <div className={styles.coreLabel}>{nucleo.titulo}</div>
          <div className={styles.coreItems}>
            {nucleo.items.map((item) => (
              <div key={item.nombre} className={styles.coreItem}>
                <TechIcon icono={item.icono} size={24} />
                <span>{item.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Resto de grupos ---------- */}
        <div className={styles.grid}>
          {resto.map((grupo) => (
            <div key={grupo.titulo} className={`${styles.card} reveal`}>
              <h3>{grupo.titulo}</h3>
              <ul className={styles.list}>
                {grupo.items.map((item) => (
                  <li key={item.nombre}>
                    <TechIcon icono={item.icono} size={16} />
                    {item.nombre}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
