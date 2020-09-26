const previous_line_text = document.querySelector("[data-previous-line]");
const current_line_text = document.querySelector("[data-current-line]");

class Calculator {
  constructor(previous_line_text, current_line_text) {
    this.previous_line_text = previous_line_text;
    this.current_line_text = current_line_text;
    this.clear();
  }

  clear() {
    this.currentLine = "";
    this.previousLine = "";
    this.operator = undefined;
  }

  delete() {
    this.currentLine = this.currentLine.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentLine.includes(".")) return;
    this.currentLine = this.currentLine.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.currentLine === "") return;

    if (this.previousLine !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousLine = this.currentLine;
    this.currentLine = "";
  }

  compute() {
    let result;
    const previousNum = parseFloat(this.previousLine);
    const currentNum = parseFloat(this.currentLine);

    if (isNaN(previousNum) || isNaN(currentNum)) return;

    switch (this.operator) {
      case "+":
        result = previousNum + currentNum;
        break;
      case "-":
        result = previousNum - currentNum;
        break;
      case "÷":
        result = previousNum / currentNum;
        break;
      case "x":
        result = previousNum * currentNum;
        break;
      default:
        return;
    }

    this.currentLine = result;
    this.previousLine = "";
    this.operator = undefined;
  }

  updateDisplay() {
    this.current_line_text.innerText = this.displayNumber(this.currentLine);

    if (this.operator != null) {
      this.previous_line_text.innerText = `${this.displayNumber(
        this.previousLine
      )} ${this.operator}`;
    } else {
      this.previous_line_text.innerText = "";
    }
  }

  displayNumber(number) {
    // declaration of variable to change the type to string of any pressed number.
    const strNumber = number.toString();

    // for a decimal point number we need to split the integer part and the decimal part

    /* splitting the decimal number as below gives us the first index of the produced array
    which is the integer part of the number */
    const integerPart = parseFloat(strNumber.split(".")[0]);

    /* splitting the decimal number as below gives us the second index of the produced array
    which is the decimal part of the number */
    const decimalPart = strNumber.split(".")[1];

    let integerDisplay;
    if (isNaN(integerPart)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerPart.toLocaleString("en");
    }

    if (decimalPart != null) {
      return `${integerDisplay}.${decimalPart}`;
    } else {
      return integerDisplay;
    }
  }
}

// We create an object from Calculator class.
const calculator = new Calculator(previous_line_text, current_line_text);

// Declaration of variable for all elements who has data-number attribute
const numberButtons = document.querySelectorAll("[data-number]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

// Declaration of variable for all elements who has data-operator attribute
const operatorButtons = document.querySelectorAll("[data-operator]");

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

// Declaration of the variable for the element who has the data-clear attribute
const acButton = document.querySelector("[data-clear]");

acButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

// Declaration of the variable for the element who has the data-delete attribute
const deleteButton = document.querySelector("[data-delete]");

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

// Declaration of the variable for the element who has the data-equal attribute
const equalsButton = document.querySelector("[data-equal]");

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});


