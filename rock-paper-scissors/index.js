
getComputerChoice();

//AI's random choice 
function getComputerChoice() {
    var result = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    console.log(result);
}
