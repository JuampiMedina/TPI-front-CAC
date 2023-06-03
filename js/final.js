const btnComprar =document.getElementById("Seguir")
const btnVolver =document.getElementById("Volver")

const buy = () => {
    location.href = "./compra.html"
    } 

const back = () => {
    location.href = "./index.html"
    } 

btnComprar.addEventListener("click",buy)
btnVolver.addEventListener("click",back)