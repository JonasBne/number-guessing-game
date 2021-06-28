// Import Bootstrap
import "bootstrap";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./css/custom.scss";


// Define UI variables
const minNumber = document.getElementById("min-number");
const maxNumber = document.getElementById("max-number");
const inputNumber = document.getElementById("input-number");
const guessBtn = document.getElementById("guess-btn");
const newGameBtn = document.getElementById("new-game-btn");
const message = document.getElementById("message");
const playerScoreBoard = document.getElementById("player-score");
const computerScoreBoard = document.getElementById("computer-score");

// Define game values
let min = 1;
let max = 10;
let winningNumber = 2;
let guessesLeft = 3;
let playerScore = 0;
let computerScore = 0;

// Assign UI min and max number
minNumber.innerText = min;
maxNumber.innerText = max;

// Event listener for guess button
guessBtn.addEventListener("click", () => {
    // Parse from string to number
    let guessedNumber = parseInt(inputNumber.value);

    // Validate input
    if (isNaN(guessedNumber) || guessedNumber < min || guessedNumber > max) {
        // Add error message
        setMessageAndBorder(`Only numbers between ${min} and ${max} are allowed!`, "red");
    }

    // Check if won
    if (guessedNumber === winningNumber) {
        // Winning case

            // Add winning message & border
            setMessageAndBorder(`The winning number is ${winningNumber}. You win!`, "green");
            // Update scoreboard
            updateScoreBoard("win");
            // Disable input field and start new game
            disableInput();
    } else {
        // Losing case

            // Game lost
            if (guessesLeft === 0) {
                // Add error message
                setMessageAndBorder(`You have ${guessesLeft} guesses left, you lost. The correct number was ${winningNumber}.`, "red");
                // Update scoreboard
                updateScoreBoard();
                // Disable input field and start new game
                disableInput();
        } else {
            // Wrong guess - game continues

                // Subtract one guess from the remaining guesses
                guessesLeft -= 1;
                // Add error message
                setMessageAndBorder(`Wrong guess. You have ${guessesLeft} guess(es) left.`, "red");
                // Clear input
                inputNumber.value = "";
        }
    }
})

// Event listener for new game button
newGameBtn.addEventListener("click", startNewGame);

// Set message and border color
function setMessageAndBorder(msg, color) {
    message.innerText = msg;
    message.style.color = color;
    inputNumber.style.borderColor = color;
}

// Disable input fields when game is won or lost
function disableInput() {
    inputNumber.setAttribute("readonly", true);
    guessBtn.classList.add("hidden");
    newGameBtn.classList.remove("hidden");
}

// Scoreboard
function updateScoreBoard(win) {
    if (win) {
        playerScore += 1;
        playerScoreBoard.innerText = playerScore;
    } else {
        computerScore += 1;
        computerScoreBoard.innerText = computerScore;
    }
}

// Start new game
function startNewGame() {
    // Clear input
    inputNumber.value = "";
    // Reset message
    message.innerText = "";
    // Reset border color
    inputNumber.style.borderColor = "black";
    // Enable input field
    inputNumber.removeAttribute("readonly");
    // Hide new game button and show guess button
    newGameBtn.classList.add("hidden");
    guessBtn.classList.remove("hidden");
}
