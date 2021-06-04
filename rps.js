// Created global variables for Scoreboard and User Inputs to be changed in functions.

let playerScore = 0;
let computerScore = 0;
let roundScore = 0;
let tieScore = 0;
let selection;
let changeAnswer;
let userSelect;
let cpuSelect;

// Computer function to randomize a number between 1-3 and return between 3
// variables of r, p, s which stand for rock, paper, scissor.

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
// A Prompt for user input on their choice in the game between rock, paper, and scissor
// Also takes the prompted answer and converts it to lowercase and trims all spaces
// making sure the answer we process in later functions will always be a strict
// variation of the 3 choices.

function getUserChoice() {
    selection = prompt("Please choose either Rock, Paper, or Scissor: ")
    changeAnswer = selection.trim().toLowerCase();

    return (changeAnswer);
}
// Round play function which accounts for all possible outcomes in Rock, Paper, Scissors.
// Each outcome adds +1 ontop of the existing score variable.
// Considers ties and if the input on the user isn't any possible variation it will
// throw an error message.

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
        } else if (userSelect === undefined || null) {
            return alert("Exiting Game.");
        } else if (userSelect !== "rock" && userSelect !== "paper" && userSelect !== "scissor") {
            alert("You will have to restart the game as you have entered an incorrect answer!"); 
        } else {
            computerScore += 1;
            roundScore += 1;
            return (console.log(`You lose! ${userSelect} loses to ${cpuSelect}.`));
        }
}
// Game reset function which takes all score counters and possible inputs to 0 or
// default ( blank string ).

function gameReset() {
    playerScore = 0;
    roundScore = 0;
    computerScore = 0;
    tieScore = 0;
    selection = " ";
    changeAnswer = " ";
}
// Function to trigger the entire game with a reset from every start of the game.
// Also resets answers before every loop to make sure there aren't any errors when
// each loop requires extra input within the same variable.

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