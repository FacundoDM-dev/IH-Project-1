// FETCH GET API XSCHOOL (PROYECTO INDIVIDUAL) ======================>

// Función asincrónica para obtener un proyecto específico y mostrarlo en el contenedor ".project-post" según el parámetro "p" en la URL.
const get1posts = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    ); // Hacemos una solicitud GET a la API para obtener todos los proyectos.
    const projects = await response.json(); // Parseamos la respuesta de la API como un objeto JSON.
    const url = new URLSearchParams(window.location.search); // Obtenemos los parámetros de la URL.
    const numProject = url.get("p"); // Obtenemos el valor del parámetro "p" que corresponde al uuid del proyecto seleccionado.
    let post = document.querySelector(".project-post"); // Seleccionamos el contenedor donde se mostrará el proyecto individual.

    // Filtramos los proyectos para obtener el proyecto seleccionado que coincide con el uuid en la URL.
    const projectsSelected = projects.filter((project) => {
      return project.uuid === numProject;
    });

    // Función que genera el HTML para mostrar los detalles del proyecto individual.
    const createHtml = (project) => {
      return `<h1>${project.name}</h1>
              <div class="project-post-title-date">
                  <h4>${project.description}</h4>
                  <h5>Completed on 02/02/23</h5>
              </div>
              <div class="img-container"></div>
              <p>${project.content}</p>`;
    };

    // Mapeamos los proyectos seleccionados y generamos el HTML con la función createHtml para cada proyecto.
    const arrayElement = projectsSelected.map((projectSelected) => {
      return createHtml(projectSelected);
    });

    // Actualizamos el contenido del contenedor ".project-post" con el HTML generado para el proyecto individual.
    post.innerHTML = arrayElement.join(""); // Usamos join("") para convertir el array en una cadena de HTML antes de asignarlo al contenido del contenedor.

    // La sección comentada muestra una forma alternativa de lograr el mismo resultado utilizando un bucle for. Ambos enfoques son válidos.

  } catch (error) {
    console.log(error); // Mostramos el error en la consola si ocurre algún problema durante la solicitud o el procesamiento de los datos.
  }
};

// Llamamos a la función get1posts para obtener y mostrar el proyecto individual.
get1posts();
