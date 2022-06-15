//using toUpperCase() to make the input/output case insensitive by making
//it ALL CAPS to match the ALL CAPS   IF conditionals statement strings



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
    
    let res = "";
    
    //rock choice
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
    res =  "Rock-Win";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    res =  "Rock-Loss";
        
    //Paper choice
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        res = "Paper-Win";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
    res =  "Paper-Loss";

    //Scissor Choice
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        res = "Scissor-Win";
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        res = "Scissor-Loss";

    //same Choice
    } else if (playerSelection === computerSelection){
    res =  "Draw";
        
    }else{
        return "Please enter ROCK, PAPER or SCISSOR"
    }

    return res;

}










// input playRound
// loop it 5 times
// console.log result each round
// store result and display when 5 rounds are played


function game() {


    for (let i = 1; i <= 5; i++) {
        switch(i){
            case 1:
                console.log(playRound(prompt().toUpperCase(), computerPlay().toUpperCase()));
            break;
            case 2:
                console.log(playRound(prompt().toUpperCase(), computerPlay().toUpperCase()));
            break;
            case 3:
                console.log(playRound(prompt().toUpperCase(), computerPlay().toUpperCase()));
            break;
            case 4:
                console.log(playRound(prompt().toUpperCase(), computerPlay().toUpperCase()));
            break;
            case 5:
                console.log(playRound(prompt().toUpperCase(), computerPlay().toUpperCase()));
            break;
        }
    }
    
}   

console.log(game())




