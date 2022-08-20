// Grab elements from DOM
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operation-button");
const displayEl = document.querySelector(".display");
const clear = document.getElementById("clear");

// The number showing on screen
let lastNumber = 0;
let currentNumber = 0;

// The last number saved on memory
let result = 0;

let currentOperator = "+";

// Each number button should change the number currently being used and force the display to update
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentNumber = parseInt(`${currentNumber}${e.target.value}`);
    updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("click");
    lastNumber = doCalculation();
    currentNumber = 0;
    displayEl.textContent = lastNumber;
    updateOperator(e.target.value);
  });
});

// Make the text in the display match the current number
function updateDisplay() {
  displayEl.textContent = currentNumber;
}

// Update the current operator, and move the current number to the 'buffer'
function updateOperator(operator) {
  currentOperator = operator;
}

function doCalculation() {
  switch (currentOperator) {
    case "+":
      return add(lastNumber, currentNumber);
    case "-":
      return subtract(lastNumber, currentNumber);
    case "*":
      return multiply(lastNumber, currentNumber);
    case "/":
      return divide(lastNumber, currentNumber);
  }
}

// Math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "STOP RIGHT THERE, YOU LITTLE DONUT!";
  }
  return a / b;
}

// Operate
function operate(operator, num1, num2) {
  let answer;
  switch (operator) {
    case "+":
      answer = add(num1, num2);
      break;
    case "-":
      answer = subtract(num1, num2);
      break;
    case "*":
      answer = multiply(num1, num2);
      break;
    case "/":
      answer = divide(num1, num2);
      break;
    default:
      answer = "INVALID OPERATOR";
      break;
  }

  return answer;
}
