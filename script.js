const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(computerChoice === playerChoice){
    result = "It's a Tie!";
  }
  else{
      switch(playerChoice){
        case "rock":
          result = (computerChoice === "paper") ? "You Lose!" : "You Win!";
          break;
        case "paper":
          result = (computerChoice === "scrissors") ? "You Lose!" : "You Win!";
          break;
        case "scissors":
          result = (computerChoice === "rock") ? "You Lose!" : "You Win!";
          break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = `${result}`;

  resultDisplay.classList.remove("redText", "greenText");

  switch(result){
    case "You Lose!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    case "You Win!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
  }
}