const readline = require("readline");

const readFromConsole = (question) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    readlineInterface.question(question, (answer) => resolve(answer)),
  );
};

module.exports = readFromConsole;
