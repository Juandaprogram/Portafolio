import styles from "./SectionHeader.module.css";

/**
 * SectionHeader
 * -------------
 * Encabezado que se repite al inicio de casi cada sección: un "kicker"
 * (la etiqueta pequeña en mayúsculas, con una rayita antes) y, opcional,
 * un título grande debajo. En el HTML original este bloque ("sec-head")
 * se copiaba y pegaba varias veces con textos distintos; aquí lo
 * convertimos en un componente que recibe esos textos como props y se
 * reutiliza en Perfil, Stack, Proyectos, etc.
 *
 * "title" es opcional: si no se pasa (como en Perfil, que ya no lleva
 * título grande), simplemente no se pinta ningún <h2> y solo queda el
 * kicker.
 *
 * No usa useState ni useEffect porque no tiene nada que "recordar" ni
 * ningún efecto secundario: solo recibe texto y lo pinta (un componente
 * "de presentación").
 */
export default function SectionHeader({ kicker, title }) {
  return (
    <div className={`${styles.head} reveal`}>
      <div className={styles.kicker}>{kicker}</div>
      {title && <h2 className={styles.title}>{title}</h2>}
    </div>
  );
}