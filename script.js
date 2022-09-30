function getComputerChoice() {
    let x = Math.random()*100;
    console.log(x);
    if (x <= 33) return 'Rock';
    else if (x <= 66) return 'Paper';
    else return 'Scissors';
}

const playerSelection = 'Rock'
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;


game(playerSelection, computerSelection, playerScore);

function playRound(playerSelection, computerSelection) {    

    if (playerSelection === computerSelection) {
         result = "Its a tie!";
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        result = 'You win! Rock beats scissors'; 
        playerScore++;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
       result = 'You Lose! Paper beats rock'
       computerScore += 1;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result = 'You Win! Paper beats rock'
        playerScore++;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        result = 'You Lose! Paper beats rock'
        computerScore += 1;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = 'You Win! Scissors beats paper'
        playerScore++;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result = 'You Lose! Rock beats scissors'
        computerScore += 1;
    }
    else {
        result = "spell it right this time buddy";
    }

}

function game(playerSelection, computerSelection) {

    while(playerScore < 5 && computerScore < 5) {
        
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Playerrrrrz Score : " + playerScore)
        console.log("Computer Score : " + computerScore)
        console.log(result);
        
    }

console.log("Player: " + playerSelection);
console.log("computer: " + computerSelection);
console.log(result);
console.log("Player Score: " + playerScore)
console.log("Computer Score: " + computerScore)

}
