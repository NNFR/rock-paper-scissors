
//AI's random choice 
function getComputerChoice() {
	var result = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
	return result;
}

//single round of game
function playRound(playerSelection, computerSelection) {
   if (playerSelection == "rock" && computerSelection == "scissors") {
	return "You win! Rock beats Scissors";
   } else if (playerSelection == "scissors" && computerSelection == "rock") {
   		return "You lose! Rock beats Scissors";
   } else if (playerSelection == "scissors" && computerSelection == "paper") {
		return "You Win! Scissors beats Paper";
   } else if (playerSelection == "paper" && computerSelection == "scissors") {
		return "You lose! Scissors beats Paper";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		return "You Win! Paper beats Rock";
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		return "You lose! Paper beats Rock";
	}
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));