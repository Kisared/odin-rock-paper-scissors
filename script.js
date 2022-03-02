const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const content = document.querySelector('.content');
const playButton = document.querySelector('.playButton');
const score = document.querySelector('.score');
const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
let userPoints = 0;
let computerPoints = 0;
let result = document.createElement('div');

rockButton.addEventListener('click', function() {playRound('rock', computerPlay());});
paperButton.addEventListener('click', function () {playRound('paper', computerPlay());});
scissorsButton.addEventListener('click', function () {playRound('scissors', computerPlay());});
score.textContent = `User points: ${userPoints}.
Computer points: ${computerPoints}.`
content.appendChild(result);
result.classList.add('result')

function computerPlay() {
    options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = `It\'s a draw. ${playerSelection} against ${computerSelection} is equal.`
        setTimeout(() => result.textContent = '', 3000);
        verificateWinner();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent = 'You win! Scissors beats Paper.';
        userPoints++;
        setTimeout(() => result.textContent = '', 3000);
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`;
        verificateWinner();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = 'You win! Paper beats Rock.';
        userPoints++;
        setTimeout(() => result.textContent = '', 3000);
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`;
        verificateWinner();
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent = 'You win! Rock beats Scissors.';
        userPoints++;
        setTimeout(() => result.textContent = '', 3000);
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`
        verificateWinner();
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result.textContent = 'You lose! Scissors beats Paper.'; 
        computerPoints++;
        setTimeout(() => result.textContent = '', 3000);
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`;
        verificateWinner();
    }  else if (computerSelection === 'paper' && playerSelection === 'rock') {
        result.textContent = 'You lose! Paper beats Rock.';
        computerPoints++;
        setTimeout(() => result.textContent = '', 3000);
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`;
        verificateWinner();
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result.textContent = 'You lose! Rock beats Scissors.';
        computerPoints++;
        setTimeout(() => result.textContent = '', 3000);
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`;
        verificateWinner();
    }
}

function verificateWinner() {
    if (userPoints === 5 && userPoints > computerPoints) {
        let winnerReport = document.createElement('div');
        winnerReport.textContent = 'You\'ve won! Congratulations';
        container.insertBefore(winnerReport, content);
        setTimeout(() => container.removeChild(winnerReport), 5000);
        content.removeChild(buttons);
        container.removeChild(score);
        userPoints = 0;
        computerPoints = 0;
        let playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play again';
        playAgainButton.classList.add('playButton');
        content.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', () => {
            content.removeChild(playAgainButton);
            content.appendChild(buttons);
            container.insertBefore(score, content);
        })
        
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`;
        return true;
    } else if (computerPoints === 5 && computerPoints > userPoints) {
        let winnerReport = document.createElement('div');
        winnerReport.textContent = 'You\'ve lost! Better luck next time';
        container.insertBefore(winnerReport, content);
        setTimeout(() => container.removeChild(winnerReport), 5000);
        content.removeChild(buttons);
        container.removeChild(score);
        userPoints = 0;
        computerPoints = 0;
        let playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play again';
        playAgainButton.classList.add('playButton');
        content.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', () => {
            content.removeChild(playAgainButton);
            content.appendChild(buttons);
            container.insertBefore(score, content);
        })
        score.textContent = `User points: ${userPoints}.
        Computer points: ${computerPoints}.`;
        return true;
    } else return false;
}