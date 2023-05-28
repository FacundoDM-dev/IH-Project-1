/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

let project = document.querySelector(".project-post")
let imgPost = document.querySelector(".img-container")

let projects = document.querySelectorAll(".project-cont-text");
let img = document.querySelectorAll(".project")

let projectsFetch = fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
  
.then((res) => res.json()).then((res) => {
  
    projects[0].querySelector("h4").innerText = res[1].name;
    projects[0].querySelector("p").innerText = res[1].description;
    
 

    projects[1].querySelector("h4").innerText = res[2].name;
    projects[1].querySelector("p").innerText = res[2].description;
    img[1].querySelector("img").src = res[2].image;
  

    projects[2].querySelector("h4").innerText = res[3].name;
    projects[2].querySelector("p").innerText = res[3].description;
    img[2].querySelector("img").src = res[3].image;

    project.querySelector("h1").innerText = res[3].name;
    project.querySelector("h4").innerText = res[3].description;
    project.querySelector("p").innerHTML = res[3].content;
 

}).catch((err) => console.log(err))


// const get3posts = () => {
//     fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
//     .then((res) => res.json())
//     .then((res) => {
//         for (let i =  1; i >= 1; i++) {
//             document.querySelector(".project-post").innerHTML += 
//                     `<h1>${res[4].name}</h1>
//                     <div class="project-post-title-date">
//                     <h4>${res[4].description}</h4>
//                     <h5>Completed on 02/02/23</h5>
//                     </div>
//                     <div class="img-container">
//                     </div>
//                     <p>${res[4].name}</p>`   
//         }
//     })
//     .catch((error) => console.log(error))

//     .then((res) => {
//         for (let i = res.length - 1; i >= 1; i--) {
//             document.querySelector('.projects-flex-container').innerHTML += 
//                     `<div class="project">
  
//                       <img src="${res[i].image}" alt="">
  
//                       <div id="project" class="project-cont-text">
  
//                         <h4>${res[i].name}</h4>
//                         <p>${res[i].description}</p>
  
//                       </div>
  
//                       <a href="">Learn more</a>
  
//                     </div>`   
//         }
//     })
//     .catch((error) => console.log(error))
//   }
  
//   window.addEventListener("load", get3posts);



