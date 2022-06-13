

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
    let playerScore = parseInt("0");
    let computerScore = parseInt("0");

    //rock choice
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        playerScore += 1;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore += 1;
        
    //Paper choice
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore += 1;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        computerScore += 1;

    //Scissor Choice
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        playerScore += 1;
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        computerScore += 1;

    //same Choice
    } else if (playerSelection === computerSelection){
        playerScore += 0;
        computerScore += 0;
    }else{
        "Please enter ROCK, PAPER or SCISSOR"
    }
    return playerScore, computerScore;
}

//using toUpperCase() to make the input/output case insensitive by making
//it ALL CAPS to match the ALL CAPS   IF conditionals statement strings
const playerSelection = "rock".toUpperCase();
const computerSelection = "paper".toUpperCase();


console.log(playRound(playerSelection,computerSelection));
function game() {

}


// I need a way to keep track of how many score both Player and Computer has
// I need to compare those to each other and return the outcome and declare a winner
//for that to be possible i need to declare 2 var and add the score to them 


// playRound to add score to score variables, then use those 


