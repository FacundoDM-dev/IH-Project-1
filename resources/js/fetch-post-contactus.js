// FETCH POST REQUEST ======================>
const fetchPost = () => {
  const fullName = document.querySelector("#fullname");
  const form = document.querySelector(".container-flex-form");
  // const fullname = document.getElementById("fullname");
  // const email = document.getElementById("email");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const postForm = new FormData(form);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: postForm,
        }
      );

      if (fullName.value.toLowerCase() === "ironhack") {
        showError("You cannot be Ironhack, because I am Ironhack.");
        return;
      } else {
        showSuccess("Message recived");
        form.reset();

        // console.log("fetch-post-request-success");
      }
    } catch {
      showError("Connection problem, try again later");
      // console.log("fetch-post-request-failure");
    }
  });
};

// FUNCTIONS FOR DOM MESSAGE ======================>

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

fetchPost();
