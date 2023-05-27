/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */
const form = document.querySelector(".container-flex-form");



form.addEventListener("submit", function (e) {
  e.preventDefault();
  const payload = new FormData(form);
  fetch("https://httpbin.org/post", {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(() => form.reset())
    .then(() => {
        // setTimeout(()=> {
        //     const message = document.querySelector("message-recive hidden")
        //     message.classList.remove("hidden")
        // }, 500)
        alert("Your message has been recived")
    })
    .catch((err) => {
        console.log(err)
        alert("Your message has not been received")
    });
});


