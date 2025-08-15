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

function getHumanChoice() {
  const valid = ["rock", "paper", "scissors"];
  while (true) {
    let choice = prompt("Rock Paper Scissors?");
    if (!choice) {
      break;
    }
    choice = choice.toLowerCase();
    if (valid.includes(choice)) {
      console.log(choice);
      return choice;
    } else {
      console.log(choice);
      console.log("Please choose a valid option.");
    }
  }
  return;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let winner = playRound(humanChoice, computerChoice);
    if (winner === "player") {
      humanScore += 1;
    } else if (winner === "computer") {
      computerScore += 1;
    }
  }
  if (humanScore > computerScore) {
    console.log("You win with the score: " + humanScore + ":" + computerScore);
  } else if (humanScore < computerScore) {
    console.log("You lose with the score: " + humanScore + ":" + computerScore);
  } else {
    console.log("It's a tie: " + humanScore + ":" + computerScore);
  }
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) {
    console.log("Ok, we'll skip this one");
    return;
  }
  switch (humanChoice) {
    case "rock":
      if (computerChoice == "paper") {
        console.log("You lose, Paper beats Rock!");
        return "computer";
      } else if (computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors!");
        return "player";
      } else {
        console.log("Tie!");
        return "tie";
      }
    case "paper":
      if (computerChoice == "scissors") {
        console.log("You lose, Scissors beats Paper!");
        return "computer";
      } else if (computerChoice == "rock") {
        console.log("You win! Paper beats Rock!");
        return "player";
      } else {
        console.log("Tie!");
        return "tie";
      }
    case "scissors":
      if (computerChoice == "rock") {
        console.log("You lose, Rock beats Scissors!");
        return "computer";
      } else if (computerChoice == "paper") {
        console.log("You win! Scissors beats Paper!");
        return "player";
      } else {
        console.log("Tie!");
        return "tie";
      }
  }
}
