let currentInput = ""; //to keep track of the input entered by the user
let previousInput = ""; // to store the previous input or the result of the last operation
let currentOperation = null; // to keep track of the selected operation
let isResultDisplayed = false; // to check if the result is displayed

function updateDisplay(newValue) {
  const display = document.querySelector("#numDisplay"); // Select the display element
  display.value = newValue; // Update its value
}

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

//debug example
function appendOperator(operator) {
  console.log("Current Input:", currentInput); // Debugging
  console.log("Operator:", operator); // Debugging

  if (currentInput === "" && operator !== "-") {
    console.log("Condition for empty input and non-minus operator, exiting...");
    return; // Do nothing if these conditions are met
  }
  if (currentInput !== "" && isNaN(currentInput[currentInput.length - 1])) {
    console.log(typeof currentInput);
    console.log(
      "Condition for last character not a number and operator not minus, exiting..."
    );
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

function calculation() {
  currentInput = eval(currentInput).toString();
  updateDisplay(currentInput);
}

equal.addEventListener("click", calculation);

/*
Step 1: Define Your Variables
Create variables to store the current input, the previous input, the current operation, and a flag to check if the result was just displayed.
Step 2: Add Event Listeners
Attach event listeners to all of your buttons. You'll want to differentiate between number buttons, operation buttons (plus, minus, multiply, divide), and function buttons (equal, clear, delete).
Step 3: Implement Functions for Calculator Operations
You'll need functions to handle:
Adding numbers to the input.
Storing the current number when an operation button is clicked.
Executing the calculation when equals is pressed.
Clearing the input or deleting a character.
Step 4: Updating the Display
Create a function that updates the display with the current input or the result of a calculation.
Step 5: Performing the Calculation
When the equals button is pressed, you need to perform the calculation based on the stored operation and input values. Be careful with division by zero!
Step 6: Handle Decimal Points
Ensure that only one decimal point can be added to the input and handle any calculations with floating point numbers correctly.
Step 7: Continuous Operations
Allow for continuous operations, such as pressing an operation button after the equals button, to use the result in the next operation.
*/
