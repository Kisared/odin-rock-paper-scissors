const rockButton = document.querySelector('rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const content = document.querySelector('.content');
rockButton.addEventListener('click', playRound('rock', computerPlay));
paperButton.addEventListener('click', playRound('paper', computerPlay));
scissorsButton.addEventListener('click', playRound('scissors', computerPlay));

function computerPlay() {
    options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const result = document.createElement('div');
        result.textContent = `It\'s a draw. ${playerSelection} against ${computerSelection} is equal.`
        content.appendChild(result);
        return undefined;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beats Paper.';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose! Paper beats Rock.';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You lose! Rock beats Scissors.';
    } else return 'An error has ocurred';
}

function game() {
    for (;userPoints < 5 && computerPoints < 5;) {
        let userPoints = 0;
        let computerPoints = 0;
        let computerSelection = computerPlay();
        selectionReport = document.createElement('div')
        selectionReport.textContent = `You selected ${playerSelection} and the computer selected ${computerSelection}.`
        content.appendChild(selectionReport);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        addPoints(result);        
    }

    console.log(`You made ${userPoints} points and the computer made ${computerPoints}.`)

    if (userPoints > computerPoints) {
        return 'You\'ve won! Congratulations';
    } else if (userPoints < computerPoints) {
        return 'You\'ve lost! Better luck next time';
    } else return 'It\'s a draw';
}

function addPoints(result) {
    if (result.slice(0, 7) === 'You win') {
        return userPoints++;
    } else if (result.slice(0, 8) === 'You lose') {
        return computerPoints++;
    } else return;
}

function verifyPlayerSelection(playerSelection) {
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') return true;
    else return false;
}





