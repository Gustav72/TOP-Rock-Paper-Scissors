let computerSelection;
let playerSelection;
let result;
let playerScore = 1;
let computerScore = 1;

function getComputerChoice() {
    let x = Math.random()*100;
    console.log(x);
    if (x <= 33) return 'rock';
    else if (x <= 66) return 'paper';
    else return 'scissors';
}

computerSelection = getComputerChoice();

rock = document.querySelector('#rock')
rock.onclick = () => {
    playerSelection = 'rock';
    game(playerSelection, computerSelection)
}
paper = document.querySelector('#paper')
paper.onclick = () => {
    playerSelection = 'paper';
    game(playerSelection, computerSelection)
}
scissors = document.querySelector('#scissors')
scissors.onclick = () => {
    playerSelection = 'scissors';
    game(playerSelection, computerSelection)
}


const playerScoreboard = document.querySelector('#player-score')
const computerScoreboard = document.querySelector('#computer-score')
const roundOutcome = document.querySelector('#round-outcome')

function playRound(playerSelection, computerSelection) {    

    if (playerSelection === computerSelection) {
         roundOutcome.textContent = "Its a tie!";

    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundOutcome.textContent = 'You win! Rock beats Scissors'; 
        playerScoreboard.textContent = playerScore++;   
        winCheck(playerScore, computerScore);

    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        roundOutcome.textContent = 'You Lose! Paper beats Rock'
       computerScoreboard.textContent = computerScore++;
       winCheck(playerScore, computerScore);
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundOutcome.textContent = 'You Win! Paper beats Rock'
        playerScoreboard.textContent = playerScore++;
        winCheck(playerScore, computerScore);
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        roundOutcome.textContent = 'You Lose! Scissors beats Paper'
        computerScoreboard.textContent = computerScore++;
        winCheck(playerScore, computerScore);
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        roundOutcome.textContent = 'You Win! Scissors beats paper'
        playerScoreboard.textContent = playerScore++;
        winCheck(playerScore, computerScore);
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        roundOutcome.textContent = 'You Lose! Rock beats Scissors'
        computerScoreboard.textContent = computerScore++;
        winCheck(playerScore, computerScore);
    }
    else {
        roundOutcome.textContent = "WTF did you do this time?!?!?!?!";
    }

}

function game(playerSelection, computerSelection) {

        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
}


function winCheck(playerScore, computerScore) {
    
    if (playerScore > 5 || computerScore > 5) {
        const endGame = document.querySelector('.choice-container')
        if (playerScore > 5) {
            endGame.textContent = 'CONGRATULATIONS YOU BEAT MR. ROBOT!!!';
        } 
        else {
            endGame.textContent = 'WHAT THE HECK YOU LOST TO A ROBOT?!?!?!';
        }
    }
    else return;
}

