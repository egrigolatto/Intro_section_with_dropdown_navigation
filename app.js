
const desplegable = document.querySelectorAll(".desplegable");
const menu_desplegable = document.querySelectorAll(".menu_desplegable");
const arrowUp = document.querySelectorAll(".arrow-up");
const arrowDown = document.querySelectorAll(".arrow-down");

const hambur = document.getElementById("hambur");
const equis = document.getElementById("equis");
const navbar = document.querySelector(".navbar");
const modal = document.querySelector(".modal");

for (let i = 0; i < desplegable.length; i++) {
    const desplegables = desplegable[i];
    
    desplegables.addEventListener("click", ()=>{
        desplegables.classList.toggle("active")
        arrowDown[i].classList.toggle("active");
        if(desplegables.classList.contains("active")){
            menu_desplegable[i].style.display = "flex";   
        } else {
            menu_desplegable[i].style.display = "none";  
        }
    })
}

hambur.addEventListener("click", ()=>{
    navbar.classList.toggle("mostrar");
    if(navbar.classList.contains("mostrar")){
        hambur.style.display = "none";
        equis.style.display = "flex";
        modal.style.display = "flex";
    }
})
equis.addEventListener("click", ()=>{
    if(navbar.classList.contains("mostrar")){
        navbar.classList.remove("mostrar");
        hambur.style.display = "flex";
        equis.style.display = "none";
        modal.style.display = "none";
    }
})

