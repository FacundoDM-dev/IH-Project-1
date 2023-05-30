export class ProjectsFetch {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.getFetch();
  }

  async getFetch() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
      );
      const projects = await response.json();
      this.domProjects(projects);
    } catch {
      console.log(error);
    }
  }

  domProjects(projects) {
    const arrayReverse = projects.slice(1, 4).reverse();
    const arrayElements = arrayReverse.map(
      (project) =>
        `<div class="project">
                <img src="${project.image}" alt="">
                <div id="project" class="project-cont-text">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                </div>
                <a href="">Learn more</a>
            </div>`
    );
    this.container.innerHTML = arrayElements.join("");
  }
}
