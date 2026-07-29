/*
 * certifications.js
 * -----------------
 * Datos de la sección "Certificaciones". Cada item es una insignia
 * (badge) de Credly o un diploma en PDF. Certifications.jsx recorre
 * este array con .map(); si está vacío, la sección muestra un aviso de
 * "próximamente" en su lugar, para que nunca se vea rota mientras no
 * hay certificaciones cargadas todavía.
 *
 * Campos de cada certificación:
 * - titulo: nombre de la certificación.
 * - emisor: quién la emite (ej. "Microsoft", "Google").
 * - fecha: texto libre (ej. "2026").
 * - img: ruta a la imagen del badge, subida a public/certs/.
 * - url: enlace público de la insignia en Credly, O una ruta a un PDF
 *   subido a public/certs/ (ej. "/certs/mi-diploma.pdf").
 *
 * Para agregar una certificación real: copia el ejemplo comentado de
 * abajo (quítale el "//" de cada línea), sube la imagen del badge a
 * public/certs/ y completa los valores. Certifications.jsx no necesita
 * cambios.
 */
export const certifications = [
  {
  titulo: "Introducción a la IA moderna",
  emisor: "CISCO",
  fecha: "2026",
  img: "/certs/introduccion_ia_moderna_2026.png",
  url: "https://www.credly.com/earner/earned/badge/7c0937ea-bcb0-45de-bba5-4ea9d580c8fa",
  },
  {
  titulo: "Introducción a la ciencia de datos",
  emisor: "CISCO",
  fecha: "2026",
  img: "/certs/introducion_ciencia_datos_2026_cisco.png",
  url: "https://www.credly.com/earner/earned/badge/e2e585fa-f43e-4707-adb6-a447043c64d3",
  },
  {
  titulo: "Festival de Habilidades de IA 2026",
  emisor: "MICROSOFT",
  fecha: "2026",
  img: "/certs/Festival_Habilidades_Microsoft_2026.png",
  url: "https://www.credly.com/earner/earned/badge/40aedf43-cef5-4852-980c-1f4e5fd31deb",
  },
];
