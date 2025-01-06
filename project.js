// function deposit() {
//   return 1;
// }

const propmt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = propmt("Enter the deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount ,try again");
    } else {
      return numberDepositAmount;
    }
  }
};
const getNumbersOfLines = () => {
  while (true) {
    const lines = propmt("Enter the number of lines (1-3) to bet on: ");
    const numberOfLines = parseInt(lines, 10);
    if (
      isNaN(numberOfLines) ||
      numberOfLines <= 0 ||
      numberOfLines > 3 ||
      lines.includes(".")
    ) {
      console.log("Invalid number of lines ,try again");
    } else {
      return numberOfLines;
    }
  }
};

const getbet = (balance) => {
  while (true) {
    const bet = propmt("Enter the total bet: ");
    const numberbet = parseInt(bet);
    if (isNaN(numberbet) || numberbet <= 0 || numberbet > balance) {
      console.log("Invalid bet,Try again");
    } else {
      return numberbet;
    }
  }
};

let balance = deposit();
const numberOfLines = getNumbersOfLines();
const bet = getbet(balance);
