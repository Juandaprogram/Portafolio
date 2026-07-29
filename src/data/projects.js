/*
 * projects.js
 * -----------
 * Datos de la sección "Proyectos". El componente Projects.jsx recorre
 * este array con .map() y pinta una <ProjectCard> por cada objeto; al
 * hacer clic en "Ver proyecto" se navega a /proyectos/:slug, una ruta
 * que lee el proyecto correspondiente desde este mismo array (ver
 * src/pages/ProjectDetail.jsx).
 *
 * Campos de cada proyecto:
 * - slug: identificador único usado en la URL (/proyectos/slug) y para
 *   buscar el proyecto en la página de detalle. Debe ser único.
 * - fecha: texto libre, se muestra tal cual en la tarjeta (ej. "2026").
 * - img: ruta a una imagen en public/proyectos/. Si el archivo todavía
 *   no existe, ProjectCard.jsx muestra automáticamente un placeholder
 *   (no hace falta borrar el campo, simplemente sube la imagen luego).
 * - enfoque: 2-3 etiquetas muy cortas (nombres del Stack) para clasificar
 *   de un vistazo con qué tecnología se relaciona más el proyecto.
 * - problema: una frase corta que resume qué problema de negocio resuelve.
 * - tecnologias: chips con el stack completo usado en el proyecto.
 * - urlDetalle / urlGithub: enlaces de la tarjeta. Un enlace solo queda
 *   activo cuando status === "live" Y además ese campo tiene una url;
 *   así puedes ir completando los datos de un proyecto sin publicarlo
 *   todavía (déjalo en status:"soon" hasta que esté listo).
 * - status: "live" (publicado) o "soon" (todavía en camino).
 *
 * Para añadir un proyecto nuevo: copia uno de estos objetos, cambia sus
 * valores y agrégalo al array. Projects.jsx y ProjectCard.jsx no
 * necesitan tocarse.
 */
export const projects = [
  {
    slug: "ecommerce-analytics-pipeline",
    nombre: "Ecommerce Analytics Pipeline",
    fecha: "2026",
    img: "/proyectos/ecommerce-analytics-pipeline.png",
    enfoque: ["Python", "SQL Server", "Power BI"],
    problema: "Centralizar información dispersa del ciclo de pedidos para detectar cuellos de botella logísticos.",
    descripcion:
      "Pipeline ETL automatizado para el análisis del ciclo de pedidos en operaciones de dropshipping. Integra múltiples fuentes mediante Python y SQL Server, conecta APIs externas (VTEX) para centralizar información dispersa y alimenta dashboards en Power BI para el seguimiento de KPIs logísticos y comerciales.",
    tecnologias: ["Python", "Pandas", "SQL Server", "Power BI", "APIs REST (Requests)", "ETL", "VTEX"],
    urlDetalle: "/proyectos/ecommerce-analytics-pipeline",
    urlGithub: "https://github.com/Juandaprogram/ecommerce-analytics-pipeline",
    status: "live",
  },
  {
    slug: "analisis-ventas-sql",
    nombre: "Análisis de ventas con SQL",
    fecha: "Próximamente",
    img: "/proyectos/analisis-ventas-sql.png",
    enfoque: ["SQL", "Excel"],
    problema: "Responder preguntas concretas de negocio a partir de un dataset real de ventas.",
    descripcion:
      "Análisis exploratorio sobre un dataset real de ventas: tendencias, productos top y segmentación de clientes para responder preguntas concretas de negocio.",
    tecnologias: ["SQL", "SQL Server", "Excel"],
    urlDetalle: null,
    urlGithub: null,
    status: "soon",
  },
  {
    slug: "dashboard-kpis-powerbi",
    nombre: "Dashboard de KPIs en Power BI",
    fecha: "Próximamente",
    img: "/proyectos/dashboard-kpis-powerbi.png",
    enfoque: ["Power BI"],
    problema: "Monitorear KPIs clave de logística y comercial en autoservicio, sin depender de reportes manuales.",
    descripcion:
      "Tablero interactivo que monitorea KPIs clave y permite explorar los datos en autoservicio, con foco en logística y comercial.",
    tecnologias: ["Power BI", "Looker Studio"],
    urlDetalle: null,
    urlGithub: null,
    status: "soon",
  },
];