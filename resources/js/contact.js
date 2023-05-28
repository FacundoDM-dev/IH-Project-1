/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */
const form = document.querySelector(".container-flex-form");
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');


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
        alert("Your message has been recived")
    })
    .catch((err) => {
        console.log(err)
        alert("Your message has not been received")
    });
});



// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = 'container-flex-form error';
//   const small = formControl.querySelector('small');
//   small.innerText = message;
// }

// function showSucces(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'container-flex-form success';
// }

// function checkEmail(input) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
//   if(re.test(input.value.trim())) {
//       showSucces(input)
//   }else {
//       showError(input,'Email is not invalid');
//   }
// }

// function checkRequired(inputArr) {
//   inputArr.forEach(function(input){
//       if(input.value.trim() === ''){
//           showError(input,`${getFieldName(input)} is required`)
//       }else {
//           showSucces(input);
//       }
//   });
// }


// form.addEventListener('submit',function(e) {
//   e.preventDefault();

//   checkRequired([fullname, email,]);
//   checkEmail(email);
 
// });
