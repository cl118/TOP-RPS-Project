// Define buttons
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsDisplay = document.querySelector('#results > p');
const resetDisplay = document.querySelector('#reset');

let playerSelection;
let computerSelection;

// Initalize scores
let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.innerHTML = playerScore;
computerScoreDisplay.innerHTML = computerScore;

// Randomly generated computer selection
function computerPlay() {
    let computerArr = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random()*3);
    let computerPick = computerArr[randomNum];

    return computerPick
}

// Event listener for each button clicked
rockBtn.addEventListener('click', (e) => {
    console.log('clicked');
    playerSelection = 'Rock';
    playRound(playerSelection)
});
paperBtn.addEventListener('click', (e) => {
    console.log('clicked');
    playerSelection = 'Paper';
    playRound(playerSelection)
});
scissorsBtn.addEventListener('click', (e) => {
    console.log('clicked');
    playerSelection = 'Scissors';
    playRound(playerSelection)
});


// Function for one round of RPS
function playRound (playerSelection) {
    computerSelection = computerPlay();
    console.log('playing');
    if (playerSelection === computerSelection) {
        return tie();
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerWin();
        } else if (computerSelection === "Paper") {
            computerWin();
        }

    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerWin();
        } else if (computerSelection === "Scissors") {
            computerWin();
        }

    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerWin();
        } else if (computerSelection === "Rock") {
            computerWin();
        }
    }
}

// Define results
function tie() {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultsDisplay.innerHTML = "It's a tie!";
    console.log('tie')
}

function playerWin() {
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    console.log('player win')

    if (playerScore < 5) {
        resultsDisplay.innerHTML = playerSelection + " beats " + computerSelection +"!";
    } else if (playerScore === 5) {
        resultsDisplay.innerHTML = "Game over! You WIN!";
        gameOver();
    }
}

function computerWin() {
    computerScore++
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    console.log('computer win');

    if (computerScore < 5) {
        resultsDisplay.innerHTML = computerSelection + " beats " + playerSelection +"!";
    } else if (computerScore === 5) {
        resultsDisplay.innerHTML = "Game over! You LOSE!"
        gameOver();
    }
}

function gameOver() {
    rockBtn.setAttribute('disabled', 1);
    paperBtn.setAttribute('disabled', 1);
    scissorsBtn.setAttribute('disabled', 1);
    createResetBtn();

}

function createResetBtn() {
    let btn = document.createElement('button');
    btn.id = 'reset-btn';
    resetDisplay.appendChild(btn);
    let resetBtn = document.querySelector('#reset > button')
    resetBtn.innerHTML = 'NEW GAME';
    resetBtn.addEventListener('click', (e) => resetGame());
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;

    resultsDisplay.innerHTML = '';

    resetDisplay.removeChild(document.getElementById('reset-btn'));

    rockBtn.removeAttribute('disabled');
    paperBtn.removeAttribute('disabled');
    scissorsBtn.removeAttribute('disabled');
}
