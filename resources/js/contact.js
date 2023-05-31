// FETCH POST REQUEST ======================>

const form = document.querySelector(".container-flex-form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try{
    const postForm = new FormData(form);

  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: postForm,
  })
    .then((res) => res.json())
    .then(() => {
      console.log("fetch-post-request-success");
      showSuccess();
      form.reset();
    })

    .catch((err) => {
      showError(err);
      console.log("fetch-post-request-failure")
    });
  }catch{

  }
});

// FUNCTIONS FOR DOM MESSAGE ======================>

const showSuccess = () => {
  const buttonSubmit = document.querySelector(".button-submit");
  buttonSubmit.classList.toggle("button-submit-success");
  buttonSubmit.innerText = "Message received";
  setInterval(() => {
    buttonSubmit.classList.remove("button-submit-success");
    buttonSubmit.innerText = "Submit";
  }, 2000);
};

const showError = () => {
  const buttonSubmit = document.querySelector(".button-submit");
  buttonSubmit.classList.toggle("button-submit-error");
  buttonSubmit.innerText = "Message not received, there was an error";
  setInterval(() => {
    buttonSubmit.classList.remove("button-submit-error");
    buttonSubmit.innerText = "Submit";
  }, 2000);
};
