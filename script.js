
const playerSelection = "rock"
const computerSelection = "paper"

function playRound(playerSelection, computerSelection) {


    if (playerSelection == "rock" && computerSelection == "scissor") {
        return `You Win ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You Loose ${computerSelection} Beats ${playerSelection}.`
    }

}

console.log(playRound(playerSelection, computerSelection));