let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice:");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log("The computer selected " + computerChoice)
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Its tie!");
        } else if (computerChoice === "paper") {
            console.log("You lose!");
            computerScore++;
        } else {
            console.log("You win!");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win!");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("Its tie!");
        } else {
            console.log("You lose!");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win!");
            humanScore++;
        } else {
            console.log("Its tie!");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);