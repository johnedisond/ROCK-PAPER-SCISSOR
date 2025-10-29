const playerSelect = document.querySelectorAll(".selection");
const displayPlayerScore = document.querySelector(".displayPlayerScore");
const displayComputerScore = document.querySelector(".displayComputerScore");
const displayPlayerChoice = document.querySelector(".displayPlayerChoice");
const displayComputerChoice = document.querySelector(".displayComputerChoice");
const displayGameResult = document.querySelector(".displayGameResult");
const displayWinnerResult = document.querySelector(".displayWinnerResult");


const choices = ["rock", "paper", "scissor"];

let playerScore = 0;
let computerScore = 0;
let winningScore = 3;
let isGameOver = false;

const disableChoices = () => {
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    setTimeout(() =>{
        rock.classList.remove("selection");
        paper.classList.remove("selection");
        scissor.classList.remove("selection");
    },1500);
}

for (let playerClicked of playerSelect) {
    playerClicked.addEventListener("click", () => {
        const playerChoice = playerClicked.id;
        console.log(playerChoice);
        playRound(playerChoice);
    })
}

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    // -animate computerChoice-
    document.querySelector(`.${computerChoice}`).classList.add("active");
    setTimeout(() => {
        document.querySelector(`.${computerChoice}`).classList.remove("active");
    }, 1500);


    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a TIE!";

    }else if ((playerChoice === "rock" && computerChoice === "scissor") ||
              (playerChoice === "paper" && computerChoice === "rock") ||
              (playerChoice === "scissor" && computerChoice === "paper")) {
        result = "YOU WIN!";
    
    }else {
        result = "YOU LOSE!";
    }
    console.log(result);

    displayGameResult.classList.remove("winBgColor", "loseBgColor");
    displayGameResult.classList.remove("winTextColor", "loseTextColor");

    displayPlayerChoice.textContent = `YOU: ${playerChoice.toUpperCase()}`;
    displayComputerChoice.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    displayGameResult.textContent = result;

    if (result === "YOU WIN!") {
        displayGameResult.classList.add("winBgColor");

    }else if (result === "YOU LOSE!") {
        displayGameResult.classList.add("loseBgColor");
    }


    // -display Score-
    if (!isGameOver && result === "YOU WIN!") {
        playerScore += 1;
        if (playerScore === winningScore) {
            isGameOver = true;
        }
        displayPlayerScore.textContent = playerScore;
    }

    if (!isGameOver && result === "YOU LOSE!") {
        computerScore += 1;
        if (computerScore === winningScore) {
            isGameOver = true;
        }
        displayComputerScore.textContent = computerScore;
    }

    if (playerScore === winningScore){
        displayPlayerScore.classList.add("winTextColor");
        displayComputerScore.classList.add("loseTextColor");
        displayWinnerResult.classList.add("winTextColor");
        displayWinnerResult.textContent = "GAME OVER! YOU WIN THIS ROUND!";
        disableChoices();

    }else if (computerScore === winningScore) {
        displayPlayerScore.classList.add("loseTextColor");
        displayComputerScore.classList.add("winTextColor");
        displayWinnerResult.classList.add("loseTextColor");
        displayWinnerResult.textContent = "GAME OVER! COMPUTER WINS THIS ROUND!";
        disableChoices();
    }
}

