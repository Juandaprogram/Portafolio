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
    slug: "seguimiento-atrasos-dropshipping",
    nombre: "Seguimiento y Alerta Atrasos a Proveedores Dropshipping",
    fecha: "2026",
    img: "/proyectos/automatizacion-atrasos-dropshipping/automatizacion-atrasos-dropshipping.png",
    enfoque: ["Power Automate & Automatización de Procesos"],
    problema: "Falta de visibilidad sobre pedidos no despachados, generando demoras sistemáticas y saturación en Servicio al Cliente.",
    descripcion:
      "Diseñé e implementé un flujo automatizado en Power Automate que evalúa diariamente los tiempos de despacho por proveedor, genera reportes dinámicos de estado (A TIEMPO, PROXIMOS A VENCER y ATRASADOS) y notifica automáticamente a más de 90 proveedores. El proceso se redujo a una ejecución entre 2 y 5 minutos, eliminando la carga manual y reduciendo drásticamente las PQRS y afectaciones al cliente final.",
    tecnologias: [
      "Power Automate",
      "Excel avanzado",
      "Outlook",
      "ETL"
    ],
    urlDetalle: "/proyectos/seguimiento-atrasos-dropshipping",
    urlGithub: "https://github.com/juanrodriguez-analytics/",
    status: "live",
    contexto:
      "Anteriormente no existía un mecanismo de alerta preventiva para los proveedores de dropshipping respecto a los pedidos pendientes de despacho. Los retrasos solo salían a la luz cuando el cliente final contactaba a Servicio al Cliente reclamando su paquete. Para solucionar esto, implementé un modelo analítico que calcula los días restantes o de mora según los acuerdos de nivel de servicio (SLA) de cada proveedor. Inicialmente, este seguimiento exigía filtrar manualmente tablas dinámicas para extraer el estado de cada uno de los 90 proveedores y enviar correos individuales dos veces por semana, lo cual demandaba un tiempo operativo considerable y limitaba la escalabilidad del control.",
    imagenProblema: "/proyectos/automatizacion-atrasos-dropshipping/flujo_problema_atrasos.png",
    datos:
      "El sistema consolida la información operacional de los pedidos y la cruza con la matriz de acuerdos de tiempos de despacho por proveedor. Mediante lógica condicional y concatenación de datos en Excel, se clasifican los pedidos en tres estados clave: 'A tiempo', 'Próximos a vencer' y 'Atrasados'. Esta información se vincula con un directorio estructurado de contactos de proveedores.",
    solucion: [
      {
        titulo: "Optimización de la estructura de datos",
        texto:
          "Rediseñé el modelo de datos eliminando la dependencia de tablas dinámicas manuales. Implementé un esquema de control basado en segmentaciones y filtros directos sobre el archivo maestro de Excel, permitiendo que las tablas de estado por proveedor se construyan de forma dinámica sin intervención humana."
      },
      {
        titulo: "Orquestación en Power Automate y triggers temporales",
        texto:
          "Configuré un flujo en Power Automate programado mediante un activador temporal (Trigger) para ejecutarse en segundo plano los días martes y jueves en horario matutino. El flujo itera sobre la base de datos, extrae la tabla de control personalizada de cada proveedor, la concatena en un formato visualmente claro y la adjunta al cuerpo del correo."
      },
      {
        titulo: "Integración con Outlook y ordenamiento automático",
        texto:
          "El flujo conecta directamente con Outlook para enviar la notificación personalizada usando la base corporativa de contactos. Además, ejecuta reglas de archivado automatizado que clasifican los correos enviados dentro de carpetas específicas por proveedor, evitando la saturación de la bandeja de entrada y garantizando trazabilidad."
      },
      {
        titulo: "Mecanismo de contingencia y tolerancia a fallos",
        texto:
          "Se estructuró el flujo con validaciones de errores para garantizar la integridad del envío. En caso de alguna interrupción en el servicio, la estructura lógica del Excel permite ejecutar provisionalmente el filtrado manual sin perder el histórico ni la estructura de datos."
      }
    ],
    imagenesProceso: [
      "/proyectos/automatizacion-atrasos-dropshipping/Flujo_PowerAutomate_1.png",
      "/proyectos/automatizacion-atrasos-dropshipping/Flujo_PowerAutomate_2.png",
      "/proyectos/automatizacion-atrasos-dropshipping/Reporte_Proveedor_Vista.png"
    ],
    resultados: [
      "Reducción drástica de tickets en Call Center: las novedades de alistamiento se detectan y gestionan internamente antes de que se conviertan en reclamos de clientes.",
      "Automatización total del ciclo de notificación: ejecución en segundo plano completada en un lapso de 2 a 5 minutos, liberando tiempo operativo.",
      "Reducción de un 99% en margen de error humano en los envíos: la vinculación automatizada entre las bases de datos y la lista de contactos garantiza que cada proveedor reciba únicamente su información correspondiente.",
      "Mejora en la cultura de cumplimiento: los proveedores cuentan con visibilidad constante sobre sus tiempos de entrega, permitiéndoles reaccionar el mismo día en que se genera un retraso o incluso de forma preventiva."
    ],
    imagenDetalle: "/proyectos/automatizacion-atrasos-dropshipping/automatizacion-atrasos-dropshipping.png"
  },
  //Reporte  diario Proveedores Dropshipping PEPEGANGA 2025
  {
    slug: "reporte-diario-dropshipping",
    nombre: "Automatización Reportes Diario a Proveedores Dropshipping",
    fecha: "2025",
    img: "/proyectos/reporte-diario-dropshipping/Reporte-Diario-DropShipping-Pepeganga.png",
    enfoque: ["Python & Automatización ETL"],
    problema: "Reporte diario a 90 proveedores hecho a mano: lento, repetitivo y con errores costosos para la empresa.",
    descripcion:
      "Cada día, un reporte a proveedores tomaba cerca de 2 horas de trabajo manual y repetitivo, con un alto riesgo de errores que le costaban dinero a la empresa. Diseñé un flujo automatizado en Python que consolida los datos, genera los archivos de cada proveedor y envía los correos. Hoy el mismo proceso toma 5 minutos, un 95% menos",
    tecnologias: ["Python", "Openpyxl", "VTEX", "Outlook", "Excel avanzado", "ETL"],
    urlDetalle: "/proyectos/reporte-diario-dropshipping",
    urlGithub: "https://github.com/juanrodriguez-analytics/",
    status: "live",
    contexto:
      "El reporte diario a proveedores de dropshipping era un proceso completamente manual que consumía cerca de 2 horas cada día, de lunes a viernes. Exigía descargar los pedidos desde VTEX, pegarlos en un Excel maestro cargado de fórmulas que consumía datos de más de tres archivos externos (artículos, referencias, proveedores, pedidos repetidos), lo que hacía el libro pesado y lento. Luego había que crear manualmente un Excel individual para cada uno de los ~90 proveedores diarios, generar una tabla dinámica dentro de cada uno y enviarlos uno por uno por correo. Además de lento, era altamente propenso a error humano, y en este negocio un error tenía costo directo: un pedido mal reportado derivaba en despachos incorrectos que la empresa terminaba asumiendo.",
    imagenProblema: "/proyectos/reporte-diario-dropshipping/flujo_negativo_reporte_drop_pepeganga.png",
    datos:
      "La fuente principal era VTEX, desde donde se descargaban los pedidos aplicando filtros específicos. Esa información se centralizaba en un Excel que a su vez se alimentaba de otras tres bases: artículos, referencias y proveedores, además del control de pedidos ya reportados para evitar duplicados.",
    solucion: [
      {
        titulo: "Reestructuración de las fuentes",
        texto:
          "Antes de automatizar, analicé qué información necesitaban realmente los proveedores y descarté lo que sobraba. Actualicé y depuré las bases que alimentaban el reporte, dejando solo lo esencial, lo que aligeró drásticamente los archivos. Creé un formato de Excel nuevo y organicé las fuentes en una estructura de carpetas ordenada por proveedor y por transportadora (Servientrega, Coordinadora y flota propia).",
      },
      {
        titulo: "Script modular en Python",
        texto:
          "Con las bases ya estructuradas, desarrollé un script modularizado que automatiza el flujo completo con Openpyxl. El proceso para el usuario se redujo a tres pasos: descargar el archivo de VTEX, pegarlo en celdas señalizadas por colores, guardar y ejecutar. A partir de ahí el script consolida la información de las distintas bases, completa los datos faltantes, filtra los pedidos ya reportados, genera el Excel individual de cada proveedor separado por transportadora (con su tabla dinámica) y lo organiza en carpetas.",
      },
      {
        titulo: "Envío automático y cierre de ciclo",
        texto:
          "El script se conecta a la base de contactos y, usando una plantilla HTML con placeholders, envía a cada proveedor su archivo correspondiente respetando el formato corporativo. Al terminar, genera un listado de los pedidos ya procesados y actualiza la base de control, dejando todo listo para el día siguiente.",
      },
      {
        titulo: "Prevención de errores",
        texto:
          "Como el único punto manual restante era el pegado inicial, implementé validaciones: si el usuario pega mal los campos, el sistema muestra una ventana emergente indicando exactamente qué revisar, en lugar de fallar silenciosamente.",
      },
    ],
    imagenesProceso: [
      "/proyectos/reporte-diario-dropshipping/Reporte_Drop_1.png",
      "/proyectos/reporte-diario-dropshipping/Reporte_Drop_2.png",
      "/proyectos/reporte-diario-dropshipping/Reporte_Drop_3.png",
    ],
    resultados: [
      "Reducción de 95% en el tiempo de ejecución: de aproximadamente 2 horas diarias a entre 5 y 10 minutos.",
      "Eliminación del error humano en el reporte, el factor que más costo representaba para la empresa. Al reportar correctamente de forma automática, se dejaron de generar los despachos equivocados que la empresa asumía económicamente.",
      "Proceso autosostenible: el usuario pasó de ejecutar decenas de pasos manuales a ser responsable únicamente de descargar y pegar, con el sistema dejando todo ordenado y documentado para la siguiente jornada.",
    ],
    //imagen solucion
    imagenDetalle: "/proyectos/reporte-diario-dropshipping/Reporte-Diario-DropShipping-Pepeganga.png",
  },
  {
    slug: "dashboard-kpis-powerbi",
    nombre: "Dashboard de KPIs en Power BI",
    fecha: "2026",
    img: "/proyectos/Informe_Servientrega_Logistico/Preview.png",
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