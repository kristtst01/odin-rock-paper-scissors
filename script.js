const btns = document.querySelector(".buttons");

const score = document.querySelector("#score");

let computerScore = 0;
let humanScore = 0;

btns.addEventListener("click", (event) => {
  let target = event.target;
  const humanChoice = target.id;

  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  if (result === 1) {
    humanScore++;
  } else if (result === -1) {
    computerScore++;
  }

  score.textContent = `Score: ${humanScore} : ${computerScore}`;

  if (humanScore === 5) {
    alert("You won!");
    resetScore();
  } else if (computerScore === 5) {
    alert("The computer won this time. Better luck next time!");
    resetScore();
  }
});

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  score.textContent = "Score: 0 : 0"
}

function getComputerChoice() {
  const random = Math.random();
  if (random < 1 / 3) {
    console.log("The computer chose Rock");
    return "rock";
  } else if (random >= 1 / 3 && random < 2 / 3) {
    console.log("The computer chose Paper");
    return "paper";
  } else {
    console.log("The computer chose Scissors");
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  const result =
    humanChoice === computerChoice
      ? 0
      : beats[humanChoice] === computerChoice
      ? 1
      : -1;

  if (result === 0) {
    console.log("Tie");
  } else if (result === 1) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
  return result;
}
