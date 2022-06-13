
const playerSelection = "rock".toUpperCase();
const computerSelection = "paper".toUpperCase(); // add computerPlay() here and toUpperCase it 

function playRound(playerSelection, computerSelection) {

    //rock choice
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        return `You Win ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return `You Loose ${computerSelection} Beats ${playerSelection}.`
        
    //Paper choice
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return `You Win ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        return `You Loose ${computerSelection} Beats ${playerSelection}.`

    //Scissor Choice
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        return `You Win ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        return `You Loose ${computerSelection} Beats ${playerSelection}.`

    //same Choice
    } else if (playerSelection === computerSelection){
        return "DRAW go again"
    }else{
        return "Please enter ROCK, PAPER or SCISSOR"
    }

}

console.log(playRound(playerSelection, computerSelection));