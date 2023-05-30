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


// BURGER BUTTON ======================>

const button = document.querySelector(".burger-button")
const nav = document.querySelector(".nav-ul")
const line1 = document.querySelector(".line1__div-animation")
const line2 = document.querySelector(".line2__div-animation")
const line3 = document.querySelector(".line3__div-animation")

button.addEventListener("click", () => {
  nav.classList.toggle("active")
  line1.classList.toggle("activeline1__div-animation")
  line2.classList.toggle("activeline2__div-animation")
  line3.classList.toggle("activeline3__div-animation")

})
