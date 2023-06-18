const btnBuy =document.getElementById("Continue")
const btnBack =document.getElementById("Return")

const buy = () => {
    location.href = "./buy.html"
    } 

const back = () => {
    location.href = "./index.html"
    } 

btnBuy.addEventListener("click",buy)
btnBack.addEventListener("click",back)