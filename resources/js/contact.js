/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

// FETCH POST ======================>

const form = document.querySelector(".container-flex-form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const payload = new FormData(form);

  fetch("s://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json())
    .then(() => form.reset())
    .then(() => showSuccess())

    .catch(() => {
      showError()
    });
});

// FUNCTIONS FOR DOM MESSAGE ======================>

const showSuccess = (() => {
  const buttonSubmit = document.querySelector(".button-submit")
    buttonSubmit.classList.toggle("button-submit-success")
    buttonSubmit.innerText = "Message received"
    setInterval(() => {
      buttonSubmit.classList.remove("button-submit-success")
      buttonSubmit.innerText = "Submit"
    }, 2000);
})

const showError = (() => {
  const buttonSubmit = document.querySelector(".button-submit")
    buttonSubmit.classList.toggle("button-submit-error")
    buttonSubmit.innerText = "Message not received, there was an error"
    setInterval(() => {
      buttonSubmit.classList.remove("button-submit-error")
      buttonSubmit.innerText = "Submit"
    }, 2000);
})


