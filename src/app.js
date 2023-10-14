const readNumbers = require("@/services/readNumbers");
const readOperation = require("@/services/readOperation");

const app = async () => {
  const [firstNumber, secondNumber] = await readNumbers();
  const operation = await readOperation();
  let result;

  switch (operation) {
    case "+":
      result = firstNumber + secondNumber;
      break;

    case "-":
      result = firstNumber - secondNumber;
      break;

    case "/":
      result = firstNumber / secondNumber;
      break;

    case "*":
      result = firstNumber * secondNumber;
      break;

    default:
      break;
  }

  console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
};

module.exports = app;
