/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

// FETCH GET API OLDSCHOOL ==========================>

// let projectArray = document.querySelectorAll(".project-cont-text");
// let projectData = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((res) => {
//     projectArray[0].querySelector("h4").innerText = res[4].title;
//     projectArray[0].querySelector("p").innerText = res[4].body;

//     projectArray[1].querySelector("h4").innerText = res[8].title;
//     projectArray[1].querySelector("p").innerText = res[8].body;

//     projectArray[2].querySelector("h4").innerText = res[7].title;
//     projectArray[2].querySelector("p").innerText = res[7].body;
//   })
//   .catch((err) => console.log(err));
  
// FETCH GET API NEWSCHOOL ==========================>
  
const get3posts = () => {
  fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  .then((res) => res.json())
  .then((res) => {
      for (let i = res.length - 1; i >= 1; i--) {
          document.querySelector('.projects-flex-container').innerHTML += 
                  `<div class="project">

                    <img src="${res[i].image}" alt="">

                    <div id="project" class="project-cont-text">

                      <h4>${res[i].name}</h4>
                      <p>${res[i].description}</p>

                    </div>

                    <a href="">Learn more</a>

                  </div>`   
      }
  })
  .catch((error) => console.log(error))
}

window.addEventListener("load", get3posts);



const button = document.querySelector(".burger-button")
const nav = document.querySelector(".nav-ul")

button.addEventListener("click", () => {
  nav.classList.toggle("active")
})


