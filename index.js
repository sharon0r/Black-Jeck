let cards = []
let hasBlackJack = false
let isAlive = false
let fisrtCard, secondCard, sum, profit = 0;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sumEl")
let profitEl = document.getElementById("profitEl")
let cardsEl = document.getElementById("cardsEl")
let playerEl = document.getElementById("playEl")

let player = {
    name :"sharon",
    //chips :500
  }
  


playerEl.textContent = player.name + " :$" + player.chips 
function randomInteger() {
    return Math.floor(Math.random() * 13) + 1
}


function initalize() {
    cards = [];
    sum = 0;
    profit = 0;
    hasBlackJack = false
    isAlive = true
    fisrtCard = randomInteger()
    secondCard = randomInteger()
    cards = [fisrtCard, secondCard];
    for (var property in cards) {
        sum += (cards[property])
        if (sum < 21) profit += calcCardValue(cards[property])
    }
    setPlayerStatus()

}

function setPlayerStatus() {
    if (sum === 21) { hasBlackJack = true }
    else if (sum > 21) { isAlive = false }
}

function startGame() {
    initalize()
    rander()

}


function calcCardValue(randomNumber) {
    // if 1     -> return 11
    // if 11-13 -> return 10
    // if 2-9 -> return value
    if (randomNumber >= 10) return 10
    else if (randomNumber === 1) return 1
    else return randomNumber
}

function rander(messag) {
    if (sum <= 20) {
        message = "Do you want a new card?"
    } else if (sum === 21) {
        message = "You got Blackjack!"
    } else {
        message = "You are out of the game!"
    }

    cardsEl.textContent = "Cards:"
    for (var property in cards) {
        cardsEl.textContent +=  " " + (cards[property]);
    }

    sumEl.textContent = "Sum:" + sum
    profitEl.textContent = "Card Value:" + profit
    messageEl.textContent = message

}



function newCard() {

    if (isAlive && hasBlackJack === false) {
        let card = randomInteger()
        cards.push(card)
        sum += card
        if (sum <= 21) profit += calcCardValue(card)
        setPlayerStatus()
        rander(message = "")
    }

}

