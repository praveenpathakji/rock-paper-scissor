let gameMode = "computer";
let player1Choice = "";

function setMode(mode) {
  gameMode = mode;
  player1Choice = "";
  document.getElementById("resultText").innerText = "";
  document.getElementById("instruction").innerText =
    mode === "player" ? "Player 1: Choose your move:" : "Choose your move:";
}

function resetGame() {
  player1Choice = "";
  document.getElementById("resultText").innerText = "";
  document.getElementById("instruction").innerText =
    gameMode === "player" ? "Player 1: Choose your move:" : "Choose your move:";
}




function playerMove(choice) {
  if (gameMode === "computer") {
    const computerChoice = getRandomChoice();
    const result = getWinner(choice, computerChoice);
    document.getElementById("resultText").innerText =
      `You chose ${choice}, Computer chose ${computerChoice} → ${result}`;
  } else if (gameMode === "player") {
    if (player1Choice === "") {
      player1Choice = choice;
      document.getElementById("instruction").innerText =
        "Player 2: Choose your move:";
    } else {
      const player2Choice = choice;
      const result = getWinner(player1Choice, player2Choice);
      document.getElementById("resultText").innerText =
        `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice} → ${result}`;
      document.getElementById("instruction").innerText =
        "Player 1: Choose your move:";
      player1Choice = "";
    }
  }
}

function getRandomChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(p1, p2) {
  if (p1 === p2) return "It's a Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return gameMode === "computer" ? "You Win!" : "Player 1 Wins!";
  } else {
    return gameMode === "computer" ? "You Lose!" : "Player 2 Wins!";
  }
}
