// eventListeners for buttons 
const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener ("click", () => {
    playRound("ROCK", computerPlay().toUpperCase());
    win(playerScr,compScr);
});

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener ("click", () => {
    playRound("PAPER", computerPlay().toUpperCase());
    win(playerScr, compScr);
});

const scissorBtn = document.querySelector(".scissor");
scissorBtn.addEventListener ("click", () => {
    playRound("SCISSOR", computerPlay().toUpperCase()) 
    win(playerScr, compScr);
});

//references to the score and hand DIVs
const playerScore = document.querySelector(".player_score");
const playerHand = document.querySelector(".playerhand");

const computerScore = document.querySelector(".computer_score");
const computerHand = document.querySelector(".computerhand");



let compScr = 0;
let playerScr = 0;



// Computer Hand choice generator
function computerPlay() {
    
    let compChoice = "";
    let randomNum = Math.floor(Math.random()* 3 + 1);

    if (randomNum === 1) {
        compChoice = "rock";
    }else if (randomNum === 2) {
        compChoice = "paper";
    }else{
        compChoice = "scissor";
    }

    return compChoice;
}




// This function returns the result of a Player vs Computer Round.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
       //ADD 1 point player
       playerScr++;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        //ADD 1 point Computer
        compScr++;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
       //ADD 1 point player
       playerScr++;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
      //ADD 1 point Computer
      compScr++
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        //ADD 1 point player
        playerScr++;
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        //ADD 1 point Computer
        compScr++;
    } else if (playerSelection === computerSelection){
       
    }


    //prints hand results in the hand DIVs
    playerHand.textContent = `${playerSelection}`
    computerHand.textContent = `${computerSelection}`

    //prints scores to DIVs
    playerScore.textContent = `YOU: ${playerScr}`;
    computerScore.textContent = `COMPUTER: ${compScr}`;

}


function win(player, computer){
  
    
    if (player === 5){
        winnerAnnounce("You Win");
    }else if (computer === 5){
        winnerAnnounce("Computer Win");
    }


}

function winnerAnnounce(winner){

    const container = document.querySelector(".container");
    const body = document.querySelector(".body");

    const div = document.createElement("div");
    div.classList.add("winner");
    const h3 = document.createElement("h3");
    h3.classList.add("winner_player");
    h3.textContent = winner;
    div.appendChild(h3);

    body.insertBefore(div, container);
}





































// This Fuction returns the end result of 5 playRound() and the result of each hand 
// function game() {

//     let playerScore = 0;
//     let computerScore = 0;
    
//     for (let i = 1; i <= 5; i++) {
//         switch(i){
//             case 1:
//                 let roundRes1 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
//                 console.log(roundRes1);

//                 if (roundRes1 === "Rock-Win" || roundRes1 === "Scissor-Win" || roundRes1 === "Paper-Win") {
//                     playerScore++
//                 }else if (roundRes1 === "Rock-Loss" || roundRes1 === "Scissor-Loss" || roundRes1 === "Paper-Loss"){
//                     computerScore++
//                 }
//             break;
//             case 2:
//                 let roundRes2 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
//                 console.log(roundRes2);

//                 if (roundRes2 === "Rock-Win" || roundRes2 === "Scissor-Win" || roundRes2 === "Paper-Win") {
//                     playerScore++
//                 }else if (roundRes2 === "Rock-Loss" || roundRes2 === "Scissor-Loss" || roundRes2 === "Paper-Loss"){
//                     computerScore++
//                 }
//             break;
//             case 3:
//                 let roundRes3 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
//                 console.log(roundRes3);

//                 if (roundRes3 === "Rock-Win" || roundRes3 === "Scissor-Win" || roundRes3 === "Paper-Win") {
//                     playerScore++
//                 }else if (roundRes3 === "Rock-Loss" || roundRes3 === "Scissor-Loss" || roundRes3 === "Paper-Loss"){
//                     computerScore++
//                 }
//             break;
//             case 4:
//                 let roundRes4 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
//                 console.log(roundRes4);

//                 if (roundRes4 === "Rock-Win" || roundRes4 === "Scissor-Win" || roundRes4 === "Paper-Win") {
//                     playerScore++
//                 }else if (roundRes4 === "Rock-Loss" || roundRes4 === "Scissor-Loss" || roundRes4 === "Paper-Loss"){
//                     computerScore++
//                 }
//             break;
//             case 5:
//                 let roundRes5 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
//                 console.log(roundRes5);

//                 if (roundRes5 === "Rock-Win" || roundRes5 === "Scissor-Win" || roundRes5 === "Paper-Win") {
//                     playerScore++
//                 }else if (roundRes5 === "Rock-Loss" || roundRes5=== "Scissor-Loss" || roundRes5 === "Paper-Loss"){
//                     computerScore++
//                 }
//             break;
//         }
//     }

//     return `player Score:${playerScore} computer Score:${computerScore}`
// }   







