const readFromConsole = require("@/services/readFromConsole");

const readNumbers = async () => {
  const firstNumber = await readFromConsole("Enter first number: ");
  const secondNumber = await readFromConsole("Enter second number: ");

  return [firstNumber, secondNumber];
};

module.exports = readNumbers;
