/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

let projectArray = document.querySelectorAll(".project-cont-text");
let projectData = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => {
    projectArray[0].querySelector("h4").innerText = res[4].title;
    projectArray[0].querySelector("p").innerText = res[4].body;

    projectArray[1].querySelector("h4").innerText = res[8].title;
    projectArray[1].querySelector("p").innerText = res[8].body;

    projectArray[2].querySelector("h4").innerText = res[7].title;
    projectArray[2].querySelector("p").innerText = res[7].body;
  })
  .catch((err) => console.log(err));








