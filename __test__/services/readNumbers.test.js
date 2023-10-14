const readNumbers = require("@/services/readNumbers");
const readFromConsole = require("@/services/readFromConsole");

jest.mock("@/services/readFromConsole");

describe("Read numbers from console service", () => {
  it("should read two numbers from console", async () => {
    // Arrange
    const firstNumber = "123";
    const secondNumber = "456";
    readFromConsole
      .mockResolvedValueOnce(firstNumber)
      .mockResolvedValueOnce(secondNumber);

    // Act
    const result = await readNumbers();

    // Assert
    expect(readFromConsole).toHaveBeenCalledTimes(2);
    expect(readFromConsole).toHaveBeenCalledWith("Enter first number: ");
    expect(readFromConsole).toHaveBeenCalledWith("Enter second number: ");
    expect(result).toEqual([firstNumber, secondNumber]);
  });
});
