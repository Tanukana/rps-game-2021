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

// Returns corresponding answer when any of the three buttons are clicked.

const btn = document.querySelectorAll('.pick button');
btn.forEach(userChoice => userChoice.addEventListener('click', choice));

function choice() {
    if(this.name == 'rock') {
        selection = 'rock';
        playRound();
    } else if(this.name == 'paper') {
        selection = 'paper';
        playRound();
    } else {
        selection = 'scissor';
        playRound();
    }
}


// A scoreboard which updates itself
function scoreUpdater() {
    const scoreDisplay = document.querySelector('#scoreDisplay');
    const elementExists = document.querySelector('#scoreDisplay p');
    if(elementExists == undefined && elementExists == null) {
        const paraD = document.createElement('p')
        paraD.innerText = `You: ${userSelect}, Computer: ${cpuSelect} \n Player Wins: ${playerScore} | Computer Wins: ${computerScore} | Ties: ${tieScore} | Rounds: ${roundScore}`;
        scoreDisplay.appendChild(paraD);
        // Checking to see if a paragraph exists within div
    } else {
        elementExists.innerText = `You: ${userSelect}, Computer: ${cpuSelect} \n Player Wins: ${playerScore} | Computer Wins: ${computerScore} | Ties: ${tieScore} | Rounds: ${roundScore}`;
        // If a paragraph exists this will simply just update the paragraph with new details
    }
}

// Creates a history of each round and displays it
function scoreLog(txt) {
    // Limiting the history log to 5 rounds
    if(roundScore <= 5) {
    const scoreHistory = document.querySelector('#scoreHistory');
    const paraH = document.createElement('p');
    paraH.classList.add(`${roundScore}`);
    paraH.textContent = txt;
    // Creates a new paragraph which comes from the playRound() function.

    scoreHistory.appendChild(paraH);

    // Calls the scoreUpdater function to update the score each round.
    scoreUpdater();
    } else {
        return; // Stops the game after 5 rounds.
    }
}

// Game function which compares the results of user input against a random answer.

function playRound() {
    userSelect = selection;
    cpuSelect = computerPlay();

    if(roundScore < 5) {

        if (userSelect === "rock" && cpuSelect == "scissor") {
            playerScore += 1;
            roundScore += 1;
            scoreLog(`Round(${roundScore}) You win! ${userSelect} beats ${cpuSelect}!`);
        } else if (userSelect === "paper" && cpuSelect == "rock") {
            playerScore += 1;
            roundScore += 1;
            scoreLog(`Round(${roundScore}) You win! ${userSelect} beats ${cpuSelect}!`);
        } else if (userSelect === "scissor" && cpuSelect == "paper") {
            playerScore += 1;
            roundScore += 1;
            scoreLog(`Round(${roundScore}) You win! ${userSelect} beats ${cpuSelect}!`);
        } else if (userSelect === cpuSelect) {
            roundScore += 1;
            tieScore +=1;
            scoreLog(`Round(${roundScore}) It's a tie between ${userSelect} and ${cpuSelect}.`);
        } else {
            computerScore += 1;
            roundScore += 1;
            scoreLog(`Round(${roundScore}) You lose! ${cpuSelect} beats ${userSelect}!`);
        }

    } else {
        return;
    }
}

// Removes all child nodes which will be used to reset the game

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Full reset of the game

const clear = document.querySelector('.clear');
const clearEvent = clear.addEventListener('click', gameReset);

function gameReset() {
    removeAllChildNodes(scoreDisplay);
    removeAllChildNodes(scoreHistory);
    playerScore = 0;
    roundScore = 0;
    computerScore = 0;
    tieScore = 0;
}