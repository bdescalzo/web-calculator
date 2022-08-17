// Grab elements from DOM
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const displayEl = document.querySelector(".display");

let currentNumber = " ";
let result = 0;
let currentOperator;

// Each number button should change the number currently being used and force the display to update
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentNumber += e.target.value;
    updateDisplay();
  });
});

function updateDisplay() {
  expression = currentNumber;
  displayEl.textContent = expression;
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
