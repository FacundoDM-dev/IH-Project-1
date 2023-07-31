// FETCH GET JSON DATA ======================>

// Función asincrónica para obtener datos desde un archivo JSON local y mostrarlos en el contenedor ".back".
const getJson = async () => {
  try {
    const response = await fetch("/resources/js/about-us.json", {
      method: 'GET' // Establecemos el método HTTP a GET (es opcional ya que GET es el método predeterminado para fetch).
    });

    const data = await response.json(); // Parseamos la respuesta del archivo JSON como un objeto JavaScript.
    let post = document.querySelector(".back"); // Seleccionamos el contenedor donde se mostrarán los datos del archivo JSON.

    // Generamos el HTML con los datos obtenidos del archivo JSON.
    const dataElement = `<h3>${data.name}</h3>
                        <h4>${data.age}</h4>
                        <p>${data.aboutme}</p>`;
    
    post.innerHTML = dataElement; // Actualizamos el contenido del contenedor ".back" con el HTML generado.

  } catch (error) {
    // Si ocurre algún error durante la solicitud o el procesamiento de los datos, se maneja aquí.
    console.log(error); // Mostramos el error en la consola para depuración.
  }
};

// Llamamos a la función getJson para obtener y mostrar los datos del archivo JSON.
getJson();
