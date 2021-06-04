// Created global variables for Scoreboard and User Inputs to be changed in functions.

let playerScore = 0;
let computerScore = 0;
let roundScore = 0;
let tieScore = 0;
let selection;
let changeAnswer;
let userSelect;
let cpuSelect;

// Choice selection for the computer opponent. Uses a number randomizer that ranges
// between 1-3 and uses the selected outcome to correlate to a return of either
// rock, paper, or scissor (variables: r, p, s )

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
// Prompts user input for the choice between rock, paper, and scissor.
// Takes input and converts to all lower case while trimming excess whitespace to
// ensure a strict variation of the 3 choices to be returned

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
// Entire game start function. Calls on an entire reset of the game at the beginning
// to start a fresh game each time the function is called. For loop which cleans
// the user input each time around to ensure a new individual answer each time.

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