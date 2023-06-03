const get1posts = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const projects = await response.json();
    const url = new URLSearchParams(window.location.search);
    const numProject = url.get("p");
    let post = document.querySelector(".project-post");

    const projectsSelected = projects.filter((project) => {
      return project.uuid === numProject;
    });

    const createHtml = (project) => {
      return `<h1>${project.name}</h1>
              <div class="project-post-title-date">
                  <h4>${project.description}</h4>
                  <h5>Completed on 02/02/23</h5>
              </div>
              <div class="img-container"></div>
              <p>${project.content}</p>`;
    };

    const arrayElement = projectsSelected.map((projectSelected) => {
      return createHtml(projectSelected);
    });

    post.innerHTML = arrayElement;

    // for (let project of projects) {
    //  if (project.uuid === numProject) {
    //   const arrayElement = `<h1>${project.name}</h1>
    //                         <div class="project-post-title-date">
    //                             <h4>${project.description}</h4>
    //                             <h5>Completed on 02/02/23</h5>
    //                         </div>
    //                         <div class="img-container"></div>
    //                         <p>${project.content}</p>`;

    // post.innerHTML = arrayElement;
    // }
    // }

  } catch {
    console.log(error);
  }
};

get1posts();
