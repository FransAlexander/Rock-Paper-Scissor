
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


function playRound(playerSelection, computerSelection) {
    
    let res = "";
    
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        res =  "Rock-Win";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        res =  "Rock-Loss";
    
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        res = "Paper-Win";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        res =  "Paper-Loss";
    
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        res = "Scissor-Win";
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        res = "Scissor-Loss";
    
    } else if (playerSelection === computerSelection){
        res =  "Draw";
    
    }else{
        return "Please enter ROCK, PAPER or SCISSOR"
    }

    return res;
}



function game() {

    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {
        switch(i){
            case 1:
                let roundRes1 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
                console.log(roundRes1);

                if (roundRes1 === "Rock-Win" || roundRes1 === "Scissor-Win" || roundRes1 === "Paper-Win") {
                    playerScore++
                }else if (roundRes1 === "Rock-Loss" || roundRes1 === "Scissor-Loss" || roundRes1 === "Paper-Loss"){
                    computerScore++
                }
            break;
            case 2:
                let roundRes2 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
                console.log(roundRes2);

                if (roundRes2 === "Rock-Win" || roundRes2 === "Scissor-Win" || roundRes2 === "Paper-Win") {
                    playerScore++
                }else if (roundRes2 === "Rock-Loss" || roundRes2 === "Scissor-Loss" || roundRes2 === "Paper-Loss"){
                    computerScore++
                }
            break;
            case 3:
                let roundRes3 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
                console.log(roundRes3);

                if (roundRes3 === "Rock-Win" || roundRes3 === "Scissor-Win" || roundRes3 === "Paper-Win") {
                    playerScore++
                }else if (roundRes3 === "Rock-Loss" || roundRes3 === "Scissor-Loss" || roundRes3 === "Paper-Loss"){
                    computerScore++
                }
            break;
            case 4:
                let roundRes4 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
                console.log(roundRes4);

                if (roundRes4 === "Rock-Win" || roundRes4 === "Scissor-Win" || roundRes4 === "Paper-Win") {
                    playerScore++
                }else if (roundRes4 === "Rock-Loss" || roundRes4 === "Scissor-Loss" || roundRes4 === "Paper-Loss"){
                    computerScore++
                }
            break;
            case 5:
                let roundRes5 = playRound( prompt().toUpperCase(), computerPlay().toUpperCase() );
                console.log(roundRes5);

                if (roundRes5 === "Rock-Win" || roundRes5 === "Scissor-Win" || roundRes5 === "Paper-Win") {
                    playerScore++
                }else if (roundRes5 === "Rock-Loss" || roundRes5=== "Scissor-Loss" || roundRes5 === "Paper-Loss"){
                    computerScore++
                }
            break;
        }
    }

    return `player Score:${playerScore} computer Score:${computerScore}`
}   



console.log(game());



