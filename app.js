const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()

}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    else /*(randomNumber === 3)*/ {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = ' its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win! &#127942;'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose! &#10060;'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win! &#127942;'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose! &#10060;'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win! &#127942;'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose! &#10060;'
    }
    resultDisplay.innerHTML = result;
}



