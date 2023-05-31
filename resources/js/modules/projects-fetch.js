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
      return projects;
    } catch {
      console.log(error);
    }
  }

  async domProjects() {
    const projects = await this.getFetch();

    const arrayReverse = projects.slice(1, 4).reverse();
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
    this.container.innerHTML = arrayElements.join("");
    // console.log(arrayElements);
  }

  async individualDomProject() {
    try {
      const projects = await this.getFetch();
    const reverseProjects = projects.slice(1,4).reverse()
    const url = new URLSearchParams(window.location.search);
    const numProject = url.get("p");
    const project = reverseProjects[numProject]

    console.log(project);


    console.log(projects.slice(1,4).reverse());
    console.log(reverseProjects);
      
    } catch (error) {
      
    }
  }
}


