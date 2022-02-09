function computerPlay() {
    options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It\'s a draw. ${playerSelection} against ${computerSelection} is equal.`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You lose! Scissors beats Paper.';
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return 'You lose! Paper beats Rock.';
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return 'You lose! Rock beats Scissors.';
    } else return 'An error has ocurred';
}

function game() {
    for (let i = 0; i < 5; i++) {

    }
}

function addPoints(playRound) {
    if (playRound.slice(0, 7) === 'You win') {
        return userPoints++;
    } else if (playRound.slice(0, 7) === 'You lose') {
        return computerPoints++;
    } else return;
}

let userPoints = 0;
let computerPoints = 0;