// Randomly generated computer selection
function computerPlay() {
    let computerArr = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random()*3);
    let computerPick = computerArr[randomNum];

    return computerPick
}

// Define results
const playerW = "player wins";
const compW = "computer wins";
const tie = "tie";

// Function for one round of RPS
function playRound ( playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return tie;
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "scissors") {
            return playerW;
        } else if (computerSelection.toLowerCase() === "paper") {
            return compW;
        }

    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            return playerW;
        } else if (computerSelection.toLowerCase() === "scissors") {
            return compW;
        }

    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "paper") {
            return playerW;
        } else if (computerSelection.toLowerCase() === "rock") {
            return compW;
        }
    }
}

// Function for one game of 5 rounds of RPS
function game () {

  console.log('Starting rock, paper, scissors...');
  console.log('Best of 5 rounds.')

    // Initalize scores
    let playerScore = 0;
    let computerScore = 0;

    // Loop through 5 rounds
    for (var i = 0; i < 5; i++) {

        // Prompt player for selections
        let playerPrompt = prompt("Select rock, paper or scissors!");
        let playerSelection = playerPrompt.toLowerCase();
        let computerSelection = computerPlay();

        // Store result of round in variable
        let result = playRound(playerSelection, computerSelection);

        // Print result of each round
        console.log('Round ' + i);
        if (result === playerW) {
            playerScore++;
            console.log(playerW);
        } else if (result === compW) {
            computerScore++;
            console.log(compW);
        } else if (result === tie) {
            console.log(tie);
        }
    }

    // Print final scores for player and computer
    console.log(playerScore);
    console.log(computerScore);

    // Calculate winner
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        return "It's a tie!";
    }
}

console.log(game());
