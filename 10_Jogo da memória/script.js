const cards = [1, 1, 2, 2, 3, 3, 4, 4];

async function generateImagePairs() {
    const ImagePairs = {};
    for (let i = 0; i < cards.length; i++) {
        if (!ImagePairs[cards[i]]) {
            const id = Math.floor(Math.random() * 1000) + 1;
            const url = `https://picsum.photos/id/${id}/300/400`;
            ImagePairs[cards[i]] = [url, url];
        }
    }
    return ImagePairs;
}

function shuffleCards(cards) {
    cards.sort(() => Math.random() - 0.5);
}

async function createCards() {
    const ImagePairs = await generateImagePairs();

    shuffleCards(cards);

    const cardList = document.querySelector(".container");
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement("div");
        const cardFront = document.createElement("div");
        const cardBack = document.createElement("div");

        card.classList.add("card");
        cardFront.classList.add("front");
        cardBack.classList.add("back");

        cardBack.style.backgroundImage = `url(img/card-back.png)`;

        const cardNumber = cards[i]; 
        const cardImage = ImagePairs[cardNumber].pop();

        cardFront.style.backgroundImage = `url(${cardImage})`;

        card.setAttribute("data-card", cardNumber);
        card.appendChild(cardBack);
        card.appendChild(cardFront);
        card.addEventListener("click", flipCard)
        cardList.appendChild(card);
    }
}

let flippedCards = 0;
let firstCards, secondCard;
let attempts = 0;

function flipCard() {
    if (flippedCards < 2 && !this.classList.contains("flip")) {
        flippedCards++;
        this.classList.add("flip");
        if (flippedCards === 1) {
            firstCards = this;
        }else{
            secondCard = this;
            attempts++
            updateAttempts();
            checkForMatch();
        }
    }
}

function checkForMatch(){
    const isMatch = 
    firstCards.getAttribute("data-card") ===
    secondCard.getAttribute("data-card");
    isMatch ? disableCards() : unflipCards()
}

function disableCards(){
    firstCards.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)

    if (document.querySelectorAll(".card:not(.flip").length === 0) {
       showCongratulationsMessage()
    }

    resetBoard()
}

function unflipCards() {
   setTimeout(() =>{
     firstCards.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard()
   },1000)
}

function resetBoard() {
     [flippedCards, firstCards, secondCard] = [0, null, null];
}

function updateAttempts(){
    const attemptsElements = document.querySelector(".attemps");
    attemptsElements.textContent = `Tentativas: ${attempts}`
}

function showCongratulationsMessage(){
    const congratulationsMessage = document.querySelector(".congratulations-container")

    const congratulationsElement = document.createElement("p")

    congratulationsElement.classList.add("congratulations")

    congratulationsElement.textContent = `Parabens! Você venceu em ${attempts} tentativas`

    congratulationsMessage.appendChild(congratulationsElement)
}
createCards();

