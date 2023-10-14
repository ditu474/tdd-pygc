const app = require("@/app");
const readNumbers = require("@/services/readNumbers");
const readOperation = require("@/services/readOperation");

jest.mock("@/services/readNumbers");
jest.mock("@/services/readOperation");

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should read numbers and operation from console and log the result", async () => {
    // Arrange
    // Test Table
    const tt = [
      [123, 456, "+", 579],
      [123, 456, "-", -333],
      [123, 456, "/", 0.26973684210526316],
      [123, 456, "*", 56088],
    ];

    for (const t of tt) {
      const [firstNumber, secondNumber, operation, result] = t;
      readNumbers.mockResolvedValueOnce([firstNumber, secondNumber]);
      readOperation.mockResolvedValueOnce(operation);
      console.log = jest.fn();

      // Act
      await app();

      // Assert
      expect(console.log).toHaveBeenCalledWith(
        `${firstNumber} ${operation} ${secondNumber} = ${result}`
      );
    }
  });
});
