// FETCH POST REQUEST ======================>
const fetchPost = () => {
  const form = document.querySelector(".container-flex-form");
  // const fullname = document.getElementById("fullname");
  // const email = document.getElementById("email");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const postForm = new FormData(form);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: postForm,
      });
      const project = response.json();
      console.log((project));
      showSuccess();
      form.reset();
      console.log("fetch-post-request-success");
    } catch {
      console.log("fetch-post-request-failure");
    }
  });
}



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




fetchPost();