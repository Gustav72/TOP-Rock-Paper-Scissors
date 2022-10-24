let computerSelection;
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.random()*100;
    console.log(x);
    if (x <= 33) return 'rock';
    else if (x <= 66) return 'paper';
    else return 'scissors';
}

computerSelection = getComputerChoice();

//game(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {    

    if (playerSelection === computerSelection) {
         result = "Its a tie!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'You win! Rock beats scissors'; 
        playerScore++;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
       result = 'You Lose! Paper beats rock'
       computerScore += 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'You Win! Paper beats rock'
        playerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        result = 'You Lose! Paper beats rock'
        computerScore += 1;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'You Win! Scissors beats paper'
        playerScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'You Lose! Rock beats scissors'
        computerScore += 1;
    }
    else {
        result = "Spell it right this time buddy";
    }

}

function game(playerSelection, computerSelection) {

    while(playerScore < 5 && computerScore < 5) {
        computerSelection = getComputerChoice();
        //playerSelection = window.prompt("Rock Paper or Scissors")
        playRound(playerSelection, computerSelection);
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log("Players Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        console.log(result);
    }
}