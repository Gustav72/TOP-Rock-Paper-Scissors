function getComputerChoice() {
    let x = Math.random()*100;
    console.log(x);
    if (x <= 33) return 'Rock';
    else if (x <= 66) return 'Paper';
    else return 'Scissors';
}

const playerSelection = 'Rock'
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "Its a tie!";
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') return 'You win! Rock beats scissors'
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') return 'You Lose! Paper beats rock'
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') return 'You Win! Paper beats rock'
    else if (playerSelection == 'Paper' && computerSelection == 'Paper') return 'You Lose! Paper beats rock'
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') return 'You Win! Scissors beats paper'
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') return 'You Lose! Rock beats scissors'
}

console.log("Player: " + playerSelection);
console.log("computer " + computerSelection);
console.log(result);

