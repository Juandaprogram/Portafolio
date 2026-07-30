/*
 * stack.js
 * --------
 * Datos de la sección "Stack tecnológico", organizados por grupos según
 * qué tan central es cada tecnología en el perfil de Juan David. El
 * componente Skills.jsx recorre este array con .map(): el primer grupo
 * ("Núcleo") se pinta con más énfasis visual porque es el que mejor lo
 * define, y los demás se muestran como listas más compactas debajo.
 *
 * Cada tecnología es un objeto { nombre, icono }. El campo "icono" le
 * dice a TechIcon.jsx (src/components/TechIcon.jsx) qué logo mostrar:
 *   { tipo: "simple", valor: "python" } → logo real de la marca (Simple Icons)
 *   { tipo: "lucide", valor: "Sparkles" } → icono genérico (lucide-react),
 *     para conceptos que no son una marca (ETL, IA generativa, etc.)
 *
 * Para añadir o quitar una tecnología: edita este array. Skills.jsx no
 * necesita cambios.
 */
export const stack = [
  {
    titulo: "Núcleo",
    items: [
      { nombre: "Python", icono: { tipo: "simple", valor: "python" } },
      { nombre: "SQL / SQL Server", icono: { tipo: "simple", valor: "microsoftsqlserver" } },
      { nombre: "Power BI", icono: { tipo: "simple", valor: "powerbi" } },
      { nombre: "Pandas", icono: { tipo: "simple", valor: "pandas" } },
    ],
  },
  {
    titulo: "Análisis y visualización",
    items: [
      { nombre: "Tableau", icono: { tipo: "simple", valor: "tableau" } },
      { nombre: "Excel avanzado", icono: { tipo: "simple", valor: "microsoftexcel" } },
      { nombre: "NumPy", icono: { tipo: "simple", valor: "numpy" } },
      { nombre: "Looker Studio", icono: { tipo: "simple", valor: "looker" } },
    ],
  },
  {
    titulo: "Automatización e integración",
    items: [
      { nombre: "ETL", icono: { tipo: "lucide", valor: "Workflow" } },
      { nombre: "APIs REST (Requests)", icono: { tipo: "lucide", valor: "Plug" } },
      { nombre: "Openpyxl", icono: { tipo: "lucide", valor: "FileSpreadsheet" } },
      { nombre: "IA generativa", icono: { tipo: "lucide", valor: "Sparkles" } },
      { nombre: "Power Automate", icono: { tipo: "simple", valor: "powerautomate" } },
    ],
  },
  {
    titulo: "Herramientas y entornos",
    items: [
      { nombre: "Git / GitHub", icono: { tipo: "simple", valor: "github" } },
      { nombre: "VTEX", icono: { tipo: "simple", valor: "vtex" } },
      { nombre: "Connectif", icono: { tipo: "lucide", valor: "Zap" } },
      { nombre: "Google Workspace", icono: { tipo: "lucide", valor: "LayoutGrid" } },
    ],
  },
];
