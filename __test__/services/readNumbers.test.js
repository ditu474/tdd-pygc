const readNumbers = require("@/services/readNumbers");
const readFromConsole = require("@/services/readFromConsole");

jest.mock("@/services/readFromConsole");

describe("Read numbers from console service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should read two int numbers from console", async () => {
    // Arrange
    const firstNumber = 123;
    const secondNumber = 456;
    readFromConsole
      .mockResolvedValueOnce(firstNumber.toString())
      .mockResolvedValueOnce(secondNumber.toString());

    // Act
    const result = await readNumbers();

    // Assert
    expect(readFromConsole).toHaveBeenCalledTimes(2);
    expect(readFromConsole).toHaveBeenCalledWith("Enter first number: ");
    expect(readFromConsole).toHaveBeenCalledWith("Enter second number: ");
    expect(result).toEqual([firstNumber, secondNumber]);
  });

  it("Should read two float numbers from console", async () => {
    // Arrange
    const firstNumber = 123.456;
    const secondNumber = 456.789;
    readFromConsole
      .mockResolvedValueOnce(firstNumber.toString())
      .mockResolvedValueOnce(secondNumber.toString());

    // Act
    const result = await readNumbers();

    // Assert
    expect(readFromConsole).toHaveBeenCalledTimes(2);
    expect(readFromConsole).toHaveBeenCalledWith("Enter first number: ");
    expect(readFromConsole).toHaveBeenCalledWith("Enter second number: ");
    expect(result).toEqual([firstNumber, secondNumber]);
  });

  it("Should read two negative numbers from console", async () => {
    // Arrange
    const firstNumber = -123.123;
    const secondNumber = -456;
    readFromConsole
      .mockResolvedValueOnce(firstNumber.toString())
      .mockResolvedValueOnce(secondNumber.toString());

    // Act
    const result = await readNumbers();

    // Assert
    expect(readFromConsole).toHaveBeenCalledTimes(2);
    expect(readFromConsole).toHaveBeenCalledWith("Enter first number: ");
    expect(readFromConsole).toHaveBeenCalledWith("Enter second number: ");
    expect(result).toEqual([firstNumber, secondNumber]);
  });

  it("Should ask again for a number if the input is not a number", async () => {
    // Arrange
    const nanInput = "not a number";
    const firstNumber = 123;
    const secondNumber = 456;
    readFromConsole
      .mockResolvedValueOnce(nanInput)
      .mockResolvedValueOnce(nanInput)
      .mockResolvedValueOnce(firstNumber)
      .mockResolvedValueOnce(nanInput)
      .mockResolvedValueOnce(secondNumber.toString());

    // Act
    const result = await readNumbers();

    // Assert
    const nanMessage = "The input is not a number. Please enter a number: ";
    expect(readFromConsole).toHaveBeenCalledTimes(5);
    expect(readFromConsole).toHaveBeenNthCalledWith(1, "Enter first number: ");
    expect(readFromConsole).toHaveBeenNthCalledWith(2, nanMessage);
    expect(readFromConsole).toHaveBeenNthCalledWith(3, nanMessage);
    expect(readFromConsole).toHaveBeenNthCalledWith(4, "Enter second number: ");
    expect(readFromConsole).toHaveBeenNthCalledWith(5, nanMessage);
    expect(result).toEqual([firstNumber, secondNumber]);
  });

  it("should ask again for a number if the number is bigger than the max safe integer", async () => {
    // Arrange
    const maxSafeInteger = Number.MAX_SAFE_INTEGER;
    const firstNumber = maxSafeInteger + 1;
    const secondNumber = 456;
    readFromConsole
      .mockResolvedValueOnce(firstNumber.toString())
      .mockResolvedValueOnce(123)
      .mockResolvedValueOnce(secondNumber.toString());

    // Act
    const result = await readNumbers();

    // Assert
    const nanMessage = "The input is not a number. Please enter a number: ";
    expect(readFromConsole).toHaveBeenCalledTimes(3);
    expect(readFromConsole).toHaveBeenNthCalledWith(1, "Enter first number: ");
    expect(readFromConsole).toHaveBeenNthCalledWith(2, nanMessage);
    expect(readFromConsole).toHaveBeenNthCalledWith(3, "Enter second number: ");
    expect(result).toEqual([123, secondNumber]);
  });

  it("should ask again for a number if the number is smaller than the min safe integer", async () => {
    // Arrange
    const minSafeInteger = Number.MIN_SAFE_INTEGER;
    const firstNumber = minSafeInteger - 1;
    const secondNumber = 456;
    readFromConsole
      .mockResolvedValueOnce(firstNumber.toString())
      .mockResolvedValueOnce(123)
      .mockResolvedValueOnce(secondNumber.toString());

    // Act
    const result = await readNumbers();

    // Assert
    const nanMessage = "The input is not a number. Please enter a number: ";
    expect(readFromConsole).toHaveBeenCalledTimes(3);
    expect(readFromConsole).toHaveBeenNthCalledWith(1, "Enter first number: ");
    expect(readFromConsole).toHaveBeenNthCalledWith(2, nanMessage);
    expect(readFromConsole).toHaveBeenNthCalledWith(3, "Enter second number: ");
    expect(result).toEqual([123, secondNumber]);
  });
});
