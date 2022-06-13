
const playerSelection = "paper"
const computerSelection = "paper"

function playRound(playerSelection, computerSelection) {

    //rock choice
    if (playerSelection == "rock" && computerSelection == "scissor") {
        return `You Win ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You Loose ${computerSelection} Beats ${playerSelection}.`
        
    //Paper choice
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You Win ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        return `You Loose ${computerSelection} Beats ${playerSelection}.`

    //Scissor Choice
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return `You Win ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return `You Loose ${computerSelection} Beats ${playerSelection}.`
    //same Choice
    } else if (playerSelection == computerSelection){
        return "DRAW go again"
    }

}

console.log(playRound(playerSelection, computerSelection));