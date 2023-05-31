import { ProjectsFetch } from "./modules/projects-fetch.js"

import { ProjectFetch } from "./modules/project-fetch.js"



// PROJECTS-FETCH for INDEX & PROJECT SIMPLE ==========================>

const projectsFetch = new ProjectsFetch (".projects-flex-container")
projectsFetch.domProjects()
projectsFetch.individualDomProject()

console.log("HOLA");
// PROJECT-FETCH for PROJECT SIMPLE ==========================>


const projectFetch = new ProjectFetch (".project-post")
await projectFetch.getFetchPost()


