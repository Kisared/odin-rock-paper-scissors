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
        let playerSelection = String(prompt('Rock, paper or scissors?')).toLowerCase();
        let computerSelection = computerPlay();
        console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}.`)
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
    } else if (result.slice(0, 7) === 'You lose') {
        return computerPoints++;
    } else return;
}

let userPoints = 0;
let computerPoints = 0;