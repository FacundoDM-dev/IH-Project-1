// FETCH GET API XSCHOOL ==========================>

const get3posts = async () => {
  try {
    const selector = document.querySelector(".projects-flex-container");
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const project = await response.json();
    const arrayReverse = project.slice(1, 4).reverse();
    const arrayElements = arrayReverse.map(
      (project) =>
        `<div class="project">
                <img src="${project.image}" alt="">
                <div id="project" class="project-cont-text">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                </div>
                <a href="/project.html?p=${project.uuid}">Learn more</a>
            </div>`
    );
    selector.innerHTML = arrayElements.join("");
  } catch {
    console.log(error);
  }
};
get3posts();



