/*     
Step 1: Define Your Variables
Create variables to store the current input, the previous input, the current operation, and a flag to check if the result was just displayed.
 */

let currentInput = ""; //to keep track of the input entered by the user
let previousInput = ""; // to store the previous input or the result of the last operation
let currentOperation = null; // to keep track of the selected operation
let isResultDisplayed = false; // to check if the result is displayed

function updateDisplay(newValue) {
  const display = document.querySelector("#numDisplay"); // Select the display element
  display.value = newValue; // Update its value
}
/*
Step 2: Add Event Listeners
Attach event listeners to all of your buttons. 
You'll want to differentiate between number buttons, 
operation buttons (plus, minus, multiply, divide), 
and function buttons (equal, clear, delete).
*/

//select all the number and value and few operation
const allnumberAndOpeation = document.querySelectorAll(".number");
const allOperator = document.querySelectorAll(".operator");

//the below are not display on the input
const clear = document.querySelector(".clear");
const deleteion = document.querySelector(".delete");
const equal = document.querySelector(".equal");

allnumberAndOpeation.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.value);
  });
});

function appendNumber(number) {
  if (isResultDisplayed) {
    currentInput = number;
    isResultDisplayed = false;
  } else {
    currentInput += number; // Append number
  }
  updateDisplay(currentInput);
}

function appendOperator(operator) {
  console.log("Current Input:", currentInput); // Debugging
  console.log("Operator:", operator); // Debugging

  if (currentInput === "" && operator !== "-") {
    return; // Do nothing if these conditions are met
  }
  if (isNaN(currentInput[currentInput.length - 1])) {
    return; // Prevent adding another operator if the last character is not a number
  }
  currentInput += operator;
  updateDisplay(currentInput);
}

allOperator.forEach((operator) => {
  operator.addEventListener("click", () => {
    console.log("Operator clicked:", operator.value);
    appendOperator(operator.value);
  });
});

// do not use let variable becuase it is a local object and it will not change the global object
function reset() {
  currentInput = ""; // Reset current input
  previousInput = ""; // Reset previous input
  currentOperation = null; // Reset current operation
  isResultDisplayed = false; // Reset result display flag
  updateDisplay(""); // Clear the display
}

clear.addEventListener("click", reset);

function deleteNumOper() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

deleteion.addEventListener("click", deleteNumOper);
