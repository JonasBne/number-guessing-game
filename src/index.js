// Import Bootstrap
import "bootstrap";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./css/custom.scss";


// Define UI variables
const minNumber = document.getElementById("min-number");
const maxNumber = document.getElementById("max-number");
const inputNumber = document.getElementById("input-number");
const guessBtn = document.getElementById("guess-btn");
const message = document.getElementById("message");
const gameContainer = document.getElementById("game");

// Define game values
let min = 1;
let max = 10;
let winningNumber = 2;
let guessesLeft = 3;

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
        // Add winning message
        setMessageAndBorder(`The winning number is ${winningNumber}. You win!`, "green");
        // Add border color
        inputNumber.style.borderColor = "green";
        // Disable input field
        inputNumber.setAttribute("readonly", true);
    } else {
        // Add error message
        setMessageAndBorder(`Wrong guess. You have ${guessesLeft} guess(es) left.`, "red");
    }

})

// Set message and border color
function setMessageAndBorder(msg, color) {
    message.innerText = msg;
    message.style.color = color;
    inputNumber.style.borderColor = color;
}
