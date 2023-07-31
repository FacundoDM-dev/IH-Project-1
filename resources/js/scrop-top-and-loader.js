// LOADER ==========================>

// Esta función se encarga de ocultar el loader después de que la página ha cargado completamente.
const loaderEject = () => {
  window.onload = () => { // Cuando la página carga completamente, se ejecuta esta función.
    setTimeout(() => { // Se agrega un retraso de 1000 milisegundos (1 segundo) para dar tiempo a que el contenido de la página se cargue completamente antes de ocultar el loader.
      const contenedor = document.querySelector(".body-load");
      contenedor.style.visibility = "hidden"; // Oculta el contenedor del loader estableciendo la propiedad visibility en "hidden".
      contenedor.style.opacity = "0"; // Establece la opacidad del contenedor del loader en 0, lo que lo hace completamente transparente y, por lo tanto, oculto.
    }, 1000);
  };
};
loaderEject(); // Llama a la función para activar el loader al cargar la página.

// SCROLL TOP ======================>

// Esta función se encarga de mostrar u ocultar un botón de "volver arriba" dependiendo del scroll vertical de la página.
const scrollTopFunc = () => {
  const d = document;
  const w = window;
  let button = document.querySelector(".scroll-top-btn"); // Selecciona el botón "volver arriba" del documento.

  w.addEventListener("scroll", () => { // Se agrega un evento de desplazamiento (scroll) al objeto window.
    let scrollTop = d.documentElement.scrollTop; // Obtiene la posición del scroll vertical de la página.

    if (scrollTop > 120) { // Si la posición del scroll es mayor a 120 píxeles, muestra el botón "volver arriba".
      button.classList.remove("hidden"); // Remueve la clase "hidden" que oculta el botón.
    } else { // Si la posición del scroll es menor o igual a 120 píxeles, oculta el botón "volver arriba".
      button.classList.add("hidden"); // Agrega la clase "hidden" para ocultar el botón.
    }
  });
};
scrollTopFunc(); // Llama a la función para activar el botón "volver arriba".

// BURGER BUTTON ======================>

// Esta función maneja el comportamiento de un botón hamburguesa que muestra u oculta un menú de navegación.
const burgerButton = () => {
  const button = document.querySelector(".burger-button"); // Selecciona el botón hamburguesa.
  const nav = document.querySelector(".nav-ul"); // Selecciona el menú de navegación (ul).
  const line1 = document.querySelector(".line1__div-animation"); // Selecciona la primera línea de la animación hamburguesa.
  const line2 = document.querySelector(".line2__div-animation"); // Selecciona la segunda línea de la animación hamburguesa.
  const line3 = document.querySelector(".line3__div-animation"); // Selecciona la tercera línea de la animación hamburguesa.

  button.addEventListener("click", () => { // Agrega un evento de clic al botón hamburguesa.
    nav.classList.toggle("active"); // Alterna la clase "active" en el menú de navegación para mostrarlo u ocultarlo.
    line1.classList.toggle("activeline1__div-animation"); // Alterna la clase "activeline1__div-animation" en la primera línea para animarla.
    line2.classList.toggle("activeline2__div-animation"); // Alterna la clase "activeline2__div-animation" en la segunda línea para animarla.
    line3.classList.toggle("activeline3__div-animation"); // Alterna la clase "activeline3__div-animation" en la tercera línea para animarla.
  });
};
burgerButton(); // Llama a la función para activar el botón hamburguesa y el menú de navegación animado.
