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

            // Add winning message
            setMessageAndBorder(`The winning number is ${winningNumber}. You win!`, "green");
            // Add border color
            inputNumber.style.borderColor = "green";
            // Update scoreboard
            playerScore += 1;
            playerScoreBoard.innerText = playerScore;
            // Disable input field
            inputNumber.setAttribute("readonly", true);
            // Hide button
            guessBtn.classList.add("hidden");
            // Show button to start over
            newGameBtn.classList.remove("hidden");
    } else {
        // Losing case

            // Subtract one guess from the remaining guesses
            guessesLeft -= 1;
            // Add error message
            setMessageAndBorder(`Wrong guess. You have ${guessesLeft} guess(es) left.`, "red");
            // Check number of guesses
            if (guessesLeft === 0) {
                // Add error message
                setMessageAndBorder(`You have ${guessesLeft} guesses left. Start over.`, "red");
                // Update scoreboard
                computerScore += 1;
                computerScoreBoard.innerText = computerScore;
                // Disable input field
                inputNumber.setAttribute("readonly", true);
                // Hide button
                guessBtn.classList.add("hidden");
                // Show button to start over
                newGameBtn.classList.remove("hidden");
        } else {

        }
    }
})

// Set message and border color
function setMessageAndBorder(msg, color) {
    message.innerText = msg;
    message.style.color = color;
    inputNumber.style.borderColor = color;
}
