const price = 200
const basic = `bg-transparent`
const error = `bg-warning`


let quantity = null
let category = null
let total = null 
let tickets = true
let n = 0

const categories = {
    estudiante: { percent: 80, value: "0"},
    trainee: { percent: 50, value: "1"},
    junior: { percent: 15, value: "2"} 
}

const textToPay = "Total a pagar: $ "

const form = document.forms.dates

const inputs = form.getElementsByTagName("input")
const select = form.getElementsByTagName("select")[0]
const totalPay = document.getElementById("total")
const btnErase =document.getElementById("erase")
const btnResume =document.getElementById("resume")

totalPay.innerText = textToPay

const totalPrice = () => {
    if (!quantity || !category) return;
    const totalValue = Math.round(price * (1 - (categories[category].percent/100)) * quantity)
    totalPay.innerText = textToPay + totalValue
} 

const resetCategory = () => {
    total = null
    type = null
    category = null
    cardColor()
    totalPay.innerText = textToPay
} 
const reset = (e) => {
    e.preventDefault()
    for (input of inputs){
        input.value =""
        select.value = "none"
    }
    quantity= 0
    resetCategory()
}

const submit = (e) => {
    e.preventDefault()
    const {name, surname, email, quantity, category} = form
    const dates =["Nombre", "Apellido", "Correo", "Cantidad", "Categoria"]

    const verification ={
    name: name.value !== "",
    surname: surname.value !== "",
    email: email.value.includes("@"),
    quantity: quantity.value >0,
    category: category.value !== "none"
    }
    
    if (quantity.value.includes(".")||quantity.value.includes(",")){
        alert ("Debe ingresar un número entero de entradas")
        tickets = false
    }

    const values = Object.values(verification)
    const accept =values.every(value => value)
    const acceptText = "Usted esta por adquirir " + quantity.value + " del tipo " + category.value + " para la conferencia." 
    
    if (accept == true && tickets !== false){
        alert(acceptText)
        location.href = "./buy_ok.html"
    } 
    else {
        n = 0
        for (let item of values){
            if (item == false) {
              alert ("Debe completar correctamente la informacion correspondiente a " + dates[n])
            }
            n += 1   
        }
    }
}

const setCategory = (e) => {
    const option = e.target.value
    console.log (option)
    if (option === "none"){
        resetCategory()
        return}   
    category=option
    const index = categories[category].value
    const container = cardsContainer[index]
    type = index
    changeColor (container, index)
    cardColor()
    totalPrice ()
}

const setQuantity = (e) => {
    const {value} = e.target
    if (value<0 || isNaN(value)){
        e.target.value = 0
        total = null
        return
    }
    quantity = value
    totalPrice ()
}


btnErase.addEventListener("click",reset)
btnResume.addEventListener("click",submit)
form.category.addEventListener("change",setCategory)
form.quantity.addEventListener("change",setQuantity)
form.quantity.addEventListener("keyup",setQuantity)