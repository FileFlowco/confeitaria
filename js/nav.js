const nav = document.querySelector("nav")

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
nav.style.background = "rgba(0,0,0,0.75)"
nav.style.backdropFilter = "blur(14px)"
}

else{
nav.style.background = "rgba(0,0,0,0.35)"
nav.style.backdropFilter = "blur(10px)"
}

})