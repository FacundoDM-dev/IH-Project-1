/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

let project = document.querySelector(".project-post")


const projectsFetch = fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
  
.then((res) => res.json())
.then((res) => {
  
    project.querySelector("h1").innerText = res[3].name;
    project.querySelector("h4").innerText = res[3].description;
    project.querySelector("p").innerHTML = res[3].content;

}).catch((err) => console.log(err))


// const get1posts = async () => {
//   await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
//   .then((res) => res.json())
//   .then((res) => {

//     for (let index = 0; index < array.length; index++) {
//          let  post = document.querySelector('.project-post')
//           post.innerHTML += 
//           `<h1>${res[4].name}</h1>
//           <div class="project-post-title-date">
//               <h4>${res[4].description}</h4>
//               <h5>Completed on 02/02/23</h5>
//           </div>
//           <div class="img-container"></div>
//           <p>${res[4].content}</p>`
//       }
//   })
//   .catch((error) => console.log(error))
// }

// window.addEventListener("load", get1posts);



