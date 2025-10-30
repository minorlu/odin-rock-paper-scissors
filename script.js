const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

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

    function playRound(humanChoice, computerChoice) {
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
    }

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    
    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();

    //     playRound(humanSelection, computerSelection);
    //     console.log("Score:\nComputer  " + computerScore + ":" + humanScore + "  Human");
    // }

    // if (computerScore > humanScore) {
    //     console.log("GAME OVER: YOU LOST!!!");
    // } else if (humanScore > computerScore) {
    //     console.log("WOOHOOO!!! YOU WON THE GAME!!!");
    // } else {
    //     console.log("WELL, IT'S TIE");
    // }
}

playGame();