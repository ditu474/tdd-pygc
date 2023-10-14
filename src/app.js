const readNumbers = require("./services/readNumbers");
const readOperation = require("./services/readOperation");
const actions = require("./actions");

const app = async () => {
  const [firstNumber, secondNumber] = await readNumbers();
  const operation = await readOperation();
  let result;

  switch (operation) {
    case "+":
      result = actions.add(firstNumber, secondNumber);
      break;

    case "-":
      result = actions.subtract(firstNumber, secondNumber);
      break;

    case "/":
      result = actions.divide(firstNumber, secondNumber);
      break;

    case "*":
      result = actions.multiply(firstNumber, secondNumber);
      break;

    default:
      break;
  }

  console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);

  return;
};

module.exports = app;
