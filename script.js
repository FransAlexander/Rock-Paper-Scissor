

function computerPlay() {

    //declare variable compChoice to store outcome of randomNum IF conditional
    let compChoice = "";
    //use randomNum outcome with IF conditionals to declare/assign a string value to each number
    let randomNum = Math.floor(Math.random()* 3 + 1);
    
    //assign choice to number
    if (randomNum === 1) {
    compChoice = "rock";
    }else if (randomNum === 2) {
    compChoice = "paper";
    }else{
    compChoice = "scissor";
    }
    
    return compChoice;
    }


function playRound(playerSelection, computerSelection) {

    //rock choice
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        return `You Win! ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return `You Loose! ${computerSelection} Beats ${playerSelection}.`
        
    //Paper choice
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return `You Win! ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        return `You Loose! ${computerSelection} Beats ${playerSelection}.`

    //Scissor Choice
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        return `You Win! ${playerSelection} Beats ${computerSelection}.`
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        return `You Loose! ${computerSelection} Beats ${playerSelection}.`

    //same Choice
    } else if (playerSelection === computerSelection){
        return `${playerSelection} vs ${computerSelection} draw`
    }else{
        return "Please enter ROCK, PAPER or SCISSOR"
    }
}

//using toUpperCase() to make the input/output case insensitive by making
//it ALL CAPS to match the ALL CAPS   IF conditionals statement strings
const playerSelection = "paper".toUpperCase();
const computerSelection = computerPlay().toUpperCase();

console.log(playRound(playerSelection, computerSelection));

