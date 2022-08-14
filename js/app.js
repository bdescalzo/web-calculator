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
