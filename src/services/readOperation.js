const readFromConsole = require("@/services/readFromConsole");

const readOperation = async () => {
  let operation = await readFromConsole("Enter operation (+, -, /, *): ");

  while (!["+", "-", "/", "*"].includes(operation)) {
    operation = await readFromConsole(
      "The input is not a valid operation. Please enter a valid operation (+, -, /, *): ",
    );
  }

  return operation;
};

module.exports = readOperation;
