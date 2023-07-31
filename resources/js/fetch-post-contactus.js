// FETCH POST REQUEST ======================>

// Función que maneja el envío de un formulario mediante una solicitud POST a la API.
const fetchPost = () => {
  const fullName = document.querySelector("#fullname"); // Obtenemos el campo del nombre completo del formulario.
  const form = document.querySelector(".container-flex-form"); // Obtenemos el formulario.
  
  form.addEventListener("submit", async (e) => { // Agregamos un evento para escuchar el envío del formulario.
    e.preventDefault(); // Evitamos que el formulario se envíe de forma predeterminada.

    try {
      const postForm = new FormData(form); // Creamos un objeto FormData con los datos del formulario.
      const response = await fetch( // Hacemos una solicitud POST a la API usando fetch.
        "https://jsonplaceholder.typicode.com/posts", // URL de la API para hacer la solicitud POST.
        {
          method: "POST", // Establecemos el método HTTP a POST.
          body: JSON.stringify(postForm), // Convertimos los datos del formulario a formato JSON y los enviamos en el cuerpo de la solicitud.
          headers: { "Content-type": "application/json; charset=UTF-8" } // Especificamos las cabeceras para el tipo de contenido.
        }
      );

      console.log(response); // Mostramos la respuesta de la API en la consola.

      if (fullName.value.toLowerCase() === "ironhack") { // Si el valor del campo de nombre completo es "ironhack" (en minúsculas).
        showError("You cannot be Ironhack, because I am Ironhack."); // Mostramos un mensaje de error personalizado.
        return;
      } else {
        showSuccess("Message received"); // Mostramos un mensaje de éxito personalizado.
        form.reset(); // Reseteamos el formulario para limpiar los campos después del envío exitoso.
      }
    } catch {
      showError("Connection problem, try again later"); // Si ocurre algún error durante la solicitud o el procesamiento de los datos, mostramos un mensaje de error.
    }
  });
};

// FUNCTIONS FOR DOM MESSAGE ======================>

// Funciones para mostrar mensajes de éxito o error en el DOM.

const showSuccess = (message) => {
  const buttonSubmit = document.querySelector(".button-submit");
  buttonSubmit.classList.toggle("button-submit-success");
  buttonSubmit.innerText = message;
  setInterval(() => {
    buttonSubmit.classList.remove("button-submit-success");
    buttonSubmit.innerText = "Submit";
  }, 3000);
};

const showError = (message) => {
  const buttonSubmit = document.querySelector(".button-submit");
  buttonSubmit.classList.toggle("button-submit-error");
  buttonSubmit.innerText = message;
  setInterval(() => {
    buttonSubmit.classList.remove("button-submit-error");
    buttonSubmit.innerText = "Submit";
  }, 5000);
};

fetchPost(); // Llama a la función fetchPost para manejar el envío del formulario.

