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

    document.querySelector(`.${computerChoice}`).classList.add("active");
    setTimeout(() => {
        document.querySelector(`.${computerChoice}`).classList.remove("active");
    }, 1500);
}

