// LOADER ==========================>

window.onload = () => {
    setTimeout(() => {
      const contenedor = document.querySelector(".body-load");
      contenedor.style.visibility = "hidden";
      contenedor.style.opacity = "0";
    }, 1000);
  };


// SCROLL TOP ======================>

const d = document;
const w = window;

w.addEventListener("scroll", ()=>{
    let button = document.querySelector(".scroll-top-btn")
    let scrollTop = d.documentElement.scrollTop

    if(scrollTop > 120){
        button.classList.remove("hidden")
    }else {
        button.classList.add("hidden")
    }
})

// d.addEventListener("click", (e)=>{
//     let button = document.querySelector(".scroll-top-btn")
//     if (e.target.matches(button)) {
//         d.scrollTo({
//             behavior: "smooth",
//             top: 0,
//             left: 0,
//         })
//     }
// })