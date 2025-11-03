const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let endGameFlag = false;

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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const resultDiv = document.querySelector(".results");
    const score = document.querySelector("#score");

    function playRound(humanChoice, computerChoice) {
        if (endGameFlag) {
            humanScore = 0;
            computerScore = 0;
            endGameFlag = false;
            resultDiv.innerHTML = "";
            score.innerHTML = "0:0";
        }

        resultDiv.innerHTML += "The computer selected " + computerChoice + "<br>";
        
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                resultDiv.innerHTML += "Its tie!<br><br>";
            } else if (computerChoice === "paper") {
                resultDiv.innerHTML += "You lose!<br><br>";
                computerScore++;
            } else {
                resultDiv.innerHTML += "You win!<br><br>";
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                resultDiv.innerHTML += "You win!<br><br>";
                humanScore++;
            } else if (computerChoice === "paper") {
                resultDiv.innerHTML += "Its tie!<br><br>";
            } else {
                resultDiv.innerHTML += "You lose!<br><br>";
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                resultDiv.innerHTML += "You lose!<br><br>";
                computerScore++;
            } else if (computerChoice === "paper") {
                resultDiv.innerHTML += "You win!<br><br>";
                humanScore++;
            } else {
                resultDiv.innerHTML += "Its tie!<br><br>";
            }
        }

        score.innerHTML = `${computerScore}:${humanScore}`;

        if (humanScore == 5) {
            resultDiv.innerHTML = "YOU WON THE GAME";
            endGameFlag = true;
        } else if (computerScore == 5) {
            resultDiv.innerHTML = "YOU LOST";
            endGameFlag = true;
        }
    }

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

playGame();