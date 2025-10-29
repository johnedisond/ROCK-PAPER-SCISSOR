const playerSelect = document.querySelectorAll(".selection");
const displayPlayerScore = document.querySelector(".displayPlayerScore");
const displayComputerScore = document.querySelector(".displayComputerScore");
const displayPlayerChoice = document.querySelector(".displayPlayerChoice");
const displayComputerChoice = document.querySelector(".displayComputerChoice");
const displayGameResult = document.querySelector(".displayGameResult");


const choices = ["rock", "paper", "scissor"];

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

    displayPlayerChoice.textContent = `YOU: ${playerChoice.toUpperCase()}`;
    displayComputerChoice.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    displayGameResult.textContent = result;
}

