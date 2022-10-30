
let playerScore = 0;
let computerScore = 0;

game();

//Player Choice
function getPlayerChoice() {
	var result = prompt("Choose rock, paper, or scissors");
	console.log("Player: " + result);
	return result;
}

//AI's random choice 
function getComputerChoice() {
	var result = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
	console.log("Computer: " + result);
	return result;
}

//single round of game
function playRound() {
	let playerSelection = getPlayerChoice();
	let computerSelection = getComputerChoice();

   if (playerSelection === "rock" && computerSelection === "scissors") {
	console.log("Player wins this round!");
	return playerScore++;

   } else if (playerSelection === "scissors" && computerSelection === "rock") {
		console.log("Computer wins this round!");
   		return computerScore++;

   } else if (playerSelection === "scissors" && computerSelection === "paper") {
		console.log("Player wins this round!");
		return playerScore++;

   } else if (playerSelection === "paper" && computerSelection === "scissors") {
		console.log("Computer wins this round!");
		return computerScore++;

	} else if (playerSelection === "paper" && computerSelection === "rock") {
		console.log("Player wins this round!");
		return playerScore++;
		
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		console.log("Computer wins this round!");
		return computerScore++;
	
	}  else {
		console.log("You tie this round!");
	}
}

//play 5 rounds of game, total score and declare winner at the end
function game() {
	for (let i = 0; i < 5; i++) {
		getPlayerChoice();
		getComputerChoice();
		playRound();	
	}
	console.log("Game Over total score: Player:" + playerScore + " Computer:" + computerScore);
}
