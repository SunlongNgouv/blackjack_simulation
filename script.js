// ----- Game data & helpers -----

const CARD_RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let playerHand = [];
let dealerHand = [];
let gameOver = false;
let playerStands = false;

// Draw a random card rank
function drawCard() {
    const idx = Math.floor(Math.random() * CARD_RANKS.length);
    return CARD_RANKS[idx];
}

// Calculate total
function calculateHandTotal(hand) {
    let total = 0;
    let aces = 0;

    for (const card of hand) {
        if (card === 'A') {
            aces += 1;
        } else if (['J', 'Q', 'K'].includes(card)) {
            total += 10;
        } else {
            total += parseInt(card, 10);
        }
    }

    // count all aces as 1
    total += aces;

    // then upgrade some aces to 11 if it doesn't bust
    while (aces > 0 && total + 10 <= 21) {
        total += 10;
        aces -= 1;
    }

    return total;
}

// ----- UI updates -----

function renderHand(elementId, hand) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; // clear

    hand.forEach(card => {
        const span = document.createElement('span');
        span.className = 'card';
        span.textContent = card;
        container.appendChild(span);
    });
}

function updateTotals() {
    const playerTotal = calculateHandTotal(playerHand);
    const dealerTotal = calculateHandTotal(dealerHand);

    document.getElementById('player-total').textContent = `Total: ${playerTotal}`;
    document.getElementById('dealer-total').textContent = `Total: ${dealerTotal}`;
}

function setStatus(message) {
    document.getElementById('status').textContent = message;
}

function updateUI() {
    renderHand('player-cards', playerHand);
    renderHand('dealer-cards', dealerHand);
    updateTotals();
}

// ----- Game flow -----

function startNewGame() {
    playerHand = [drawCard()];
    dealerHand = [drawCard()];
    gameOver = false;
    playerStands = false;

    document.getElementById('hit-btn').disabled = false;
    document.getElementById('stand-btn').disabled = false;

    setStatus('Game started. Your move!');
    updateUI();
}

function playerHit() {
    if (gameOver || playerStands) return;

    playerHand.push(drawCard());
    updateUI();

    const total = calculateHandTotal(playerHand);
    if (total > 21) {
        setStatus('Player busts! Dealer wins.');
        gameOver = true;
        document.getElementById('hit-btn').disabled = true;
        document.getElementById('stand-btn').disabled = true;
    }
}

function playerStand() {
    if (gameOver) return;

    playerStands = true;
    document.getElementById('hit-btn').disabled = true;
    document.getElementById('stand-btn').disabled = true;

    dealerTurn();
}

function dealerTurn() {
    setStatus("Dealer's turn...");
    updateUI();

    // Simple dealer rule: hit until 17 or more
    while (calculateHandTotal(dealerHand) < 17) {
        dealerHand.push(drawCard());
        updateUI();
    }

    const playerTotal = calculateHandTotal(playerHand);
    const dealerTotal = calculateHandTotal(dealerHand);

    if (dealerTotal > 21 && playerTotal > 21) {
        setStatus('Both bust!');
    } else if (dealerTotal > 21) {
        setStatus('Dealer busts! Player wins!');
    } else if (playerTotal > 21) {
        setStatus('Player busts! Dealer wins.');
    } else if (playerTotal > dealerTotal) {
        setStatus('Player wins!');
    } else if (dealerTotal > playerTotal) {
        setStatus('Dealer wins!');
    } else {
        setStatus("It's a tie!");
    }

    gameOver = true;
}

// ----- Wire up buttons -----

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-game-btn').addEventListener('click', startNewGame);
    document.getElementById('hit-btn').addEventListener('click', playerHit);
    document.getElementById('stand-btn').addEventListener('click', playerStand);

    // Optional: auto-start a round
    // startNewGame();
});
