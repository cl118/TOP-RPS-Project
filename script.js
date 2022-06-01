// Define buttons
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsDisplay = document.querySelector('#results > p');
let playerSelection;
let computerSelection;

// Initalize scores
let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.innerHTML = playerScore;
computerScoreDisplay.innerHTML = computerScore;

// Randomly generated computer selection
function computerPlay() {
    let computerArr = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random()*3);
    let computerPick = computerArr[randomNum];

    return computerPick
}

// Event listener for each button clicked
rockBtn.addEventListener('click', (e) => {
    console.log('clicked');
    playerSelection = 'rock';
    playRound(playerSelection)
});
paperBtn.addEventListener('click', (e) => {
    console.log('clicked');
    playerSelection = 'paper';
    playRound(playerSelection)
});
scissorsBtn.addEventListener('click', (e) => {
    console.log('clicked');
    playerSelection = 'scissors';
    playRound(playerSelection)
});


// Function for one round of RPS
function playRound (playerSelection) {
    computerSelection = computerPlay();
    console.log('playing');
    if (playerSelection === computerSelection) {
        return tie();
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerWin();
        } else if (computerSelection === "paper") {
            computerWin();
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWin();
        } else if (computerSelection === "scissors") {
            computerWin();
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerWin();
        } else if (computerSelection === "rock") {
            computerWin();
        }
    } else {
        console.log('error')
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
        resultsDisplay.innerHTML = "Game over! You WIN!"
    }
}

function computerWin() {
    computerScore++
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    console.log('computer win')

    if (computerScore < 5) {
        resultsDisplay.innerHTML = computerSelection + " beats " + playerSelection +"!";
    } else if (computerScore === 5) {
        resultsDisplay.innerHTML = "Game over! You LOSE!"
    }
}
