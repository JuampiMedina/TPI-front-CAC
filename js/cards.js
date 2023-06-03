let type = null

const cards = document.getElementsByClassName("card-body")
const cardsContainer = document.querySelectorAll(".btn")


// Utils

const colors = [`bg-primary`, `bg-info`, `bg-warning`]
const inicial = `bg-transparent`

const changeColor = (card, index, color=false) =>{
    const i = Number(index)
    color 
        ?card.classList.replace(colors[i], inicial)
        :card.classList.replace(inicial, colors[i])
}

// Eventos

const cardEnter = (e) => {
    const {index} = e.target.dataset
    changeColor (e.target, index)
}

const cardLeave = (e) => {
    const {index} = e.target.dataset
    changeColor (e.target, index, true)
}

const cardClick = (e) => {
    type = e.currentTarget.dataset.index 
    cardColor() 
}

const removeColor = (card) =>{
    card.removeEventListener("mouseenter", cardEnter)
    card.removeEventListener("mouseleave", cardLeave)
    card.removeEventListener("click", cardClick)
}

const setColor = (card) => {
    card.addEventListener("mouseenter", cardEnter)
    card.addEventListener("mouseleave", cardLeave)
    card.addEventListener("click", cardClick)
}

const cardColor = () => {
for (let card of cardsContainer){
    const {index} = card.dataset
    removeColor(card)
    if (index !== type) {
        setColor (card)
        changeColor (card, index, true)
    }
    }
}

cardColor()