const get1posts = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const project = await response.json();
    const array = project[3];
    let post = document.querySelector(".project-post");
    const arrayElement = `<h1>${array.name}</h1>
             <div class="project-post-title-date">
                 <h4>${array.description}</h4>
                 <h5>Completed on 02/02/23</h5>
             </div>
             <div class="img-container"></div>
             <p>${array.content}</p>`;

    post.innerHTML = arrayElement;
  } catch {
    console.log(error);
  }
};

get1posts();
