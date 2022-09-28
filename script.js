let computerChoice;

function getComputerChoice() {
    let x = Math.random()*100;
    console.log(x);
    if (x <= 33) computerChoice = 'Rock';
    else if (x <= 66) computerChoice = 'Paper';
    else computerChoice = 'Scissors';
}

getComputerChoice();

console.log(computerChoice);