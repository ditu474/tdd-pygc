const readFromConsole = require("@/services/readFromConsole");

const convertToNumber = (value) => {
  try {
    const number = parseFloat(value);
    if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER)
      throw new Error("Number is too big");

    return number;
  } catch (_) {
    return NaN;
  }
};

const readNumbers = async () => {
  let isNumberFirst = false;
  let isNumberSecond = false;

  let firstNumber = await readFromConsole("Enter first number: ");
  isNumberFirst = !isNaN(convertToNumber(firstNumber));

  while (!isNumberFirst) {
    firstNumber = await readFromConsole(
      "The input is not a number. Please enter a number: ",
    );
    isNumberFirst = !isNaN(convertToNumber(firstNumber));
  }

  let secondNumber = await readFromConsole("Enter second number: ");
  isNumberSecond = !isNaN(convertToNumber(secondNumber));

  while (!isNumberSecond) {
    secondNumber = await readFromConsole(
      "The input is not a number. Please enter a number: ",
    );
    isNumberSecond = !isNaN(convertToNumber(secondNumber));
  }

  return [convertToNumber(firstNumber), convertToNumber(secondNumber)];
};

module.exports = readNumbers;
