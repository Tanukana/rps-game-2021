let playerScore = 0;
let computerScore = 0;
let roundScore = 0;
let tieScore = 0;
let selection;
let changeAnswer;
let userSelect;
let cpuSelect;

// Answer returned depending on random number generated between 1-3

function computerPlay() {
    let r = "rock";
    let p = "paper";
    let s = "scissor";
    let randomNum = Math.floor(Math.random() * 3) +1;
        if (randomNum == 1) {
            return (r);
        } else if (randomNum == 2) {
            return(p);
        } else {
            return (s);
        }
}

function getUserChoice() {
    selection = prompt("Please choose either Rock, Paper, or Scissor: ")
    changeAnswer = selection.trim().toLowerCase();

    return (changeAnswer);
}

// Per round function which compares user input and computer generated input
// and determines outcome of the game while incrementing the scoreboard each round.
// Considers invalid inputs.

function playRound() {
        userSelect = getUserChoice();
        cpuSelect = computerPlay();

        if (userSelect === "rock" && cpuSelect == "scissor") {
            playerScore += 1;
            roundScore += 1;
            return (console.log(`You win! ${userSelect} beats ${cpuSelect}.`));
        } else if (userSelect === "paper" && cpuSelect == "rock") {
            playerScore += 1;
            roundScore += 1;
            return (console.log(`You win! ${userSelect} beats ${cpuSelect}.`));
        } else if (userSelect === "scissor" && cpuSelect == "paper") {
            playerScore += 1;
            roundScore += 1;
            return (console.log(`You win! ${userSelect} beats ${cpuSelect}.`));
        } else if (userSelect === cpuSelect) {
            roundScore += 1;
            tieScore +=1;
            return (console.log(`You both picked ${userSelect}! It's a tie.`));
        } else if (userSelect === undefined) {
            return alert("Exiting Game.");
        } else if (userSelect !== "rock" && userSelect !== "paper" && userSelect !== "scissor") {
            alert("You will have to restart the game as you have entered an incorrect answer!"); 
        } else {
            computerScore += 1;
            roundScore += 1;
            return (console.log(`You lose! ${userSelect} loses to ${cpuSelect}.`));
        }
}
// Game reset function which sets all related variables to the game back to their
// default state of either 0 or an empty string.

function gameReset() {
    playerScore = 0;
    roundScore = 0;
    computerScore = 0;
    tieScore = 0;
    selection = " ";
    changeAnswer = " ";
}

function game() {
        gameReset();
    for (i = 0; i < 5; i++) {
        selection = " ";
        changeAnswer = " ";
        playRound();
        console.log(`You: ${userSelect}, Computer: ${cpuSelect}`);
        console.log(`Player Wins: ${playerScore} | Computer Wins: ${computerScore} | Ties: ${tieScore} | Rounds: ${roundScore}`);
    }
}