// FETCH GET API XSCHOOL ==========================>

// Definimos una función asincrónica llamada get3posts que obtendrá 3 proyectos de una API y los mostrará en el contenedor ".projects-flex-container".
const get3posts = async () => {
  try {
    const selector = document.querySelector(".projects-flex-container"); // Seleccionamos el contenedor donde se mostrarán los proyectos.
    const response = await fetch( // Hacemos una solicitud GET a la API.
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const project = await response.json(); // Parseamos la respuesta de la API como un objeto JSON.

    // Tomamos los últimos 3 proyectos del array obtenido y los invertimos para que se muestren en orden inverso.
    const arrayReverse = project.slice(1, 4).reverse();

    // Mapeamos cada proyecto en el arrayReverse y creamos un elemento HTML para mostrar la imagen, el nombre y la descripción del proyecto, así como un enlace a la página de detalles del proyecto.
    const arrayElements = arrayReverse.map(
      (project) =>
        `<div class="project">
          <img src="${project.image}" alt="">
          <div id="project" class="project-cont-text">
            <h4>${project.name}</h4>
            <p>${project.description}</p>
          </div>
          <a href="/project.html?p=${project.uuid}">Learn more</a>
        </div>`
    );

    // Actualizamos el contenido del contenedor con los elementos generados.
    selector.innerHTML = arrayElements.join("");
  } catch (error) { // Si ocurre algún error durante la solicitud o el procesamiento de los datos, lo capturamos aquí.
    console.log(error); // Mostramos el error en la consola para depuración.
  }
};

// Llamamos a la función get3posts para obtener y mostrar los proyectos.
get3posts();
