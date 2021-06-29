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
let winningNumber = generateRandomNumber(min, max);
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
            updateScoreBoard("won");
            // Disable input field and start new game
            disableInput();
    } else {
        // Losing case

            // Wrong number
            guessesLeft -= 1;

            // Game lost
            if (guessesLeft === 0) {
                // Add error message
                setMessageAndBorder(`You have ${guessesLeft} guesses left, you lost. The correct number was ${winningNumber}.`, "red");
                // Update scoreboard
                updateScoreBoard("lost");
                // Disable input field and start new game
                disableInput();
        } else {
            // Wrong guess - game continues

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
function updateScoreBoard(gameStatus) {
    if (gameStatus === "won") {
        playerScore += 1;
        playerScoreBoard.innerText = playerScore;
    } else if (gameStatus === "lost") {
        computerScore += 1;
        computerScoreBoard.innerText = computerScore;
    }
}

// Start new game
function startNewGame() {
    // Reset guesses left
    guessesLeft = 3;
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
    // Generate a new random number (because page never reloads, hence math fired is only fired once
    winningNumber = generateRandomNumber(min,max)
}

// Generate a winning number
function generateRandomNumber(min, max) {
    // Return to store in variable
    return Math.floor(Math.random()*(max-min+1)+min)
}

