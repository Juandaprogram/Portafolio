# Portafolio — Juan David Rodríguez

Sitio web personal de analista de datos y automatización. Migrado de
HTML/CSS/JS plano a **React + Vite** conservando exactamente el mismo
diseño (colores, fuentes, tamaños y animaciones).

La versión original en HTML/CSS/JS puro se conserva en [`_legacy/`](_legacy)
solo como referencia; ya no se usa para servir el sitio.

## 🚀 Cómo levantar el proyecto

```bash
npm install
npm run dev
```

Abre la URL que imprime la terminal (normalmente `http://localhost:5173`).

Otros comandos:

```bash
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve esa versión de producción en local
```

## 📁 Estructura de carpetas

```
src/
├── main.jsx              → punto de entrada: monta <App /> y carga los estilos globales
├── App.jsx                → ensambla todas las secciones en orden
├── styles/
│   ├── variables.css      → paleta de colores y fuentes (:root)
│   └── global.css         → reset, body, .wrap, .btn, .chip, .reveal
├── components/
│   ├── Navbar.jsx          → barra superior (scroll + menú móvil)
│   ├── Hero.jsx            → portada
│   ├── About.jsx           → sección "Perfil"
│   ├── Skills.jsx          → sección "Stack técnico"
│   ├── Projects.jsx        → sección "Proyectos"
│   ├── ProjectCard.jsx      → tarjeta de proyecto reutilizable
│   ├── Process.jsx         → sección "Metodología"
│   ├── Contact.jsx         → sección "Contacto"
│   ├── Footer.jsx          → pie de página
│   ├── SectionHeader.jsx    → kicker + título que se repite en cada sección
│   └── *.module.css        → estilos propios de cada componente (CSS Modules)
├── hooks/
│   ├── useScrolled.js       → detecta si hubo scroll (oscurece la Navbar)
│   └── useReveal.js         → IntersectionObserver de las animaciones "reveal"
└── data/
    ├── skills.js            → tarjetas del stack técnico
    ├── projects.js          → proyectos
    └── process.js           → pasos de la metodología
```

## ✏️ Dónde tocar cada cosa

| Quiero cambiar... | Archivo |
|---|---|
| Un color, una fuente | `src/styles/variables.css` |
| Un texto de la portada (Hero) | `src/components/Hero.jsx` |
| El texto de "Perfil" o la ficha profesional | `src/components/About.jsx` |
| Las tecnologías del stack | `src/data/skills.js` |
| Un paso de la metodología | `src/data/process.js` |
| Los enlaces de contacto | `src/components/Contact.jsx` |

### ➕ Añadir un proyecto nuevo

No hay que tocar ningún componente: solo agrega un objeto al array de
[`src/data/projects.js`](src/data/projects.js), copiando la forma de los
que ya existen:

```js
{
  id: "mi-proyecto-nuevo",
  status: "soon",       // "soon" mientras lo completas, "live" cuando lo publiques
  featured: false,       // true si quieres que ocupe todo el ancho de la fila
  thumbIcon: "📈",
  thumbLabel: "Texto corto de la miniatura",
  title: "Título del proyecto",
  description: "Descripción del proyecto.",
  stack: ["Tecnología 1", "Tecnología 2"],
  links: [
    { type: "case", label: "⟶ Ver caso", url: null },
    { type: "github", label: "⌥ GitHub", url: "https://github.com/..." },
  ],
}
```

Claves a tener en cuenta:

- **`status`** controla la etiqueta ("Proyecto Finalizado" / "Próximamente")
  y si los enlaces quedan activos. Un enlace solo es clicable cuando
  `status === "live"` **y** además tiene `url`. Así puedes ir rellenando
  las URLs sin publicar el proyecto todavía: déjalo en `"soon"` hasta que
  esté listo y luego cámbialo a `"live"`.
- **`links`** se muestra en el orden del array — pon primero el que
  quieras más a la izquierda de la tarjeta.

`Projects.jsx` recorre el array con `.map()` y `ProjectCard.jsx` es la
tarjeta reutilizable que decide cómo pintar cada uno, así que ninguno de
los dos necesita cambios al añadir un proyecto.

## 🧠 Sobre los comentarios del código

Cada componente y cada hook tiene comentarios en español explicando qué
hace y, en los hooks, por qué se usa `useState` o `useEffect` en ese
caso concreto — pensados para alguien que sabe leer código pero no ha
usado React antes.