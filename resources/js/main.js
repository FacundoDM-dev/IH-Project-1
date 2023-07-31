import { ProjectsFetch } from "./modules/projects-fetch.js";
import { ProjectFetch } from "./modules/project-fetch.js";

// PROJECTS-FETCH for INDEX & PROJECT SIMPLE ==========================>

// Crear una instancia de ProjectsFetch con un selector CSS que apunta al contenedor de proyectos en la página.
const projectsFetch = new ProjectsFetch(".projects-flex-container");

// Obtener y mostrar los proyectos en el contenedor especificado.
projectsFetch.domProjects();

// Mostrar el contenido individual de cada proyecto en la página principal.
projectsFetch.individualDomProject();

console.log("HOLA");

// PROJECT-FETCH for PROJECT SIMPLE ==========================>

// Crear una instancia de ProjectFetch con un selector CSS que apunta al contenedor del proyecto individual en la página.
const projectFetch = new ProjectFetch(".project-post");

// Hacer una solicitud de obtención de datos para el proyecto y mostrarlo en el contenedor especificado.
await projectFetch.getFetchPost();

