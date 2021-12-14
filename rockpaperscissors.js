const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissor' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        return console.log('Error, please try again.')
    }
}

//console.log(getUserChoice('rock'));

const getComputerChoice = () => {
    let computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        return 'rock';
    } else if (computerInput === 1) {
        return 'scissor';
    } else {
        return 'paper';
    }
}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'YOU HAVE WON!';
    }
    if (userChoice === computerChoice) {
        return 'The game is a tie.';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won, you lost!';
        } else {
            return 'You have won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissor') {
            return 'The computer has won, you lost!';
        } else {
            return 'You have won!';
        }
    }
    if (userChoice === 'scissor') {
        if (computerChoice === 'rock') {
            return 'The computer has won, you lost!';
        } else {
            return 'You have won!';
        }
    }
}

//console.log(determineWinner('paper','scissor'));

const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log(userChoice + ' vs. ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

