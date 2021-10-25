
let cards = []

let sum = 0

let message = ""
let hasBlackJack = false
let isOut = false

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")


let player = {
    name: "Shivam",
    chips: "100"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+": $"+player.chips

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1 
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber===1){
        return 11
    }
    return randomNumber
}

function startGame(){
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "You've got Blackjack"
        hasBlackJack = true
    }
    else {
        message = "Game over"
        isOut = true
    }

    messageEl.textContent = message
    let cardDisplay = ""
    for(let count = 0; count < cards.length; count++){
    cardDisplay+=cards[count]+" "
    cardsEl.textContent = "Cards: "+ cardDisplay
    }
    sumEl.textContent = "Sum: "+sum

}

function newCard(){
    if(!isOut && !hasBlackJack){
    let thirdCard = getRandomCard()
    cards.push(thirdCard)
    sum+=thirdCard
    
    renderGame()
    }
}