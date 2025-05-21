const cards = [
    { url: './card/Sirt2.png.png', value: 2 },
    { url: './card/Qyap2.png.png', value: 2 },
    { url: './card/Xar2.png.png', value: 2 },
    { url: './card/Xach2.png.png', value: 2 },

    { url: './card/Sirt3.png.png', value: 3 },
    { url: './card/Qyap3.png.png', value: 3 },
    { url: './card/Xar3.png.png', value: 3 },
    { url: './card/Xach3.png.png', value: 3 },

    { url: './card/Sirt4.png.png', value: 4 },
    { url: './card/Qyap4.png.png', value: 4 },
    { url: './card/Xar4.png.png', value: 4 },
    { url: './card/Xach4.png.png', value: 4 },

    { url: './card/Sirt5.png.png', value: 5 },
    { url: './card/Qyap5.png.png', value: 5 },
    { url: './card/Xar5.png.png', value: 5 },
    { url: './card/Xach5.png.png', value: 5 },

    { url: './card/Sirt6.png.png', value: 6 },
    { url: './card/Qyap6.png.png', value: 6 },
    { url: './card/Xar6.png.png', value: 6 },
    { url: './card/Xach6.png.png', value: 6 },

    { url: './card/Sirt7.png.png', value: 7 },
    { url: './card/Qyap7.png.png', value: 7 },
    { url: './card/Xar7.png.png', value: 7 },
    { url: './card/Xach7.png.png', value: 7 },

    { url: './card/Sirt8.png.png', value: 8 },
    { url: './card/Qyap8.png.png', value: 8 },
    { url: './card/Xar8.png.png', value: 8 },
    { url: './card/Xach8.png.png', value: 8 },

    { url: './card/Sirt9.png.png', value: 9 },
    { url: './card/Qyap9.png.png', value: 9 },
    { url: './card/Xar9.png.png', value: 9 },
    { url: './card/Xach9.png.png', value: 9 },

    { url: './card/Sirt10.png.png', value: 10 },
    { url: './card/Qyap10.png.png', value: 10 },
    { url: './card/Xar10.png.png', value: 10 },
    { url: './card/Xach10.png.png', value: 10 },

    { url: './card/SirtValet.png.png', value: 10 },
    { url: './card/QyapValet.png.png', value: 10 },
    { url: './card/XarValet.png.png', value: 10 },
    { url: './card/XachValet.png.png', value: 10 },

    { url: './card/SirtQueen.png.png', value: 10 },
    { url: './card/QyapQueen.png.png', value: 10 },
    { url: './card/XarQueen.png.png', value: 10 },
    { url: './card/XachQueen.png.png', value: 10 },

    { url: './card/SirtKing.png.png', value: 10 },
    { url: './card/QyapKing.png.png', value: 10 },
    { url: './card/XarKing.png.png', value: 10 },
    { url: './card/XachKing.png.png', value: 10 },

    { url: './card/SirtTuz.png.png'
        , value: 11 },
    { url: './card/QyapTuz.png.png', value: 11 },
    { url: './card/XarTuz.png.png', value: 11 },
    { url: './card/XachTuz.png.png', value: 11 },
]
const playerCardsDiv = document.querySelector('.myCards');
const dealerCardsDiv = document.querySelector('.cardsDiv');
const playerScoreSpan = document.querySelector('.myNumber span');
const dealerScoreSpan = document.querySelector('.number span');
const openCards = document.getElementById('openCards');
const stopCards = document.getElementById('stopCards');
const deleteCards = document.getElementById('deleteCards');

//Խառնել քարտերը
function shuffle(deck) {
    return deck.sort(() => Math.random() - 0.5);
}

let deck = [];
let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;


function startGame() {
    deck = shuffle([...cards]);
    playerCards = [];
    dealerCards = [];
    playerScore = 0;
    dealerScore = 0;


    playerCardsDiv.innerHTML = '';
    dealerCardsDiv.innerHTML = '';
    playerScoreSpan.textContent = playerScore;
    dealerScoreSpan.textContent = dealerScore;


    // Բաժանել քարտերը
    drawCard(playerCards, playerCardsDiv);
    drawCard(playerCards, playerCardsDiv);
    drawCard(dealerCards, dealerCardsDiv);
    drawCard(dealerCards, dealerCardsDiv);

    //Անջատել կոճակները
    openCards.disabled = false;
    stopCards.disabled = false;
}


// Բաժանել Քարտ
function drawCard(hand, handDiv) {
    const card = deck.pop();
    hand.push(card);
    renderCard(card, handDiv);
    updateScores();
}
function renderCard(card, container) {
    const img = document.createElement('img')
    img.src = card.url;
    container.append(img);
}

// հաշվարկ
function calculateScore(hand) {
    let score = 0;
    let aceCount = 0;

    hand.forEach(cards => {
        score += cards.value;
        if (cards.value === 11) aceCount++;
    });

    while (score > 21 && aceCount > 0) {
        score -= 10;
        aceCount--;
    }
    return score;
}

// միավոր   
function updateScores() {
    playerScore = calculateScore(playerCards);
    dealerScore = calculateScore(dealerCards);
    playerScoreSpan.textContent = playerScore;
    dealerScoreSpan.textContent = dealerScore;

    if (playerScore > 21) {
        alert('Պարտություն');
        endGame();
    }
}

// դիլլեռի խաղ
function stopGame() {
    while (dealerScore < 17) {
        drawCard(dealerCards, dealerCardsDiv);
        dealerScore = calculateScore(dealerCards)
    }
    if (dealerScore > 21 || playerScore > dealerScore) {
        alert('Հաղթանակ');
    } else if (playerScore === dealerScore) {
        alert('Ոչ ոքի');
    } else {
        alert('Պարտություն');
    }

    endGame();
}

// ավարտ
function endGame() {
    openCards.disabled = true;
    stopCards.disabled = true;
}

//սկսել
deleteCards.addEventListener('click', startGame);
openCards.addEventListener('click', () => drawCard(playerCards, playerCardsDiv));
stopCards.addEventListener('click', stopGame);


startGame();
