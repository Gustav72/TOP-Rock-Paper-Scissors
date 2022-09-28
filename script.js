function getComputerChoice() {
    let x = Math.random()*100;
    console.log(x);
    if (x <= 33) return 'Rock';
    else if (x <= 66) return 'Paper';
    else return 'Scissors';
}

const playerSelection = 'Rock'
const computerSelection = getComputerChoice();
const result = playRound();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return 
}

console.log(computerSelection);
