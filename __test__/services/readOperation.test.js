const readOperation = require("@/services/readOperation");
const readFromConsole = require("@/services/readFromConsole");

jest.mock("@/services/readFromConsole");

describe("Read operation from console service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should read operation from console", async () => {
    // Arrange
    const operation = "+";
    readFromConsole.mockResolvedValueOnce(operation);

    // Act
    const result = await readOperation();

    // Assert
    expect(readFromConsole).toHaveBeenCalledTimes(1);
    expect(readFromConsole).toHaveBeenCalledWith(
      "Enter operation (+, -, /, *): ",
    );
    expect(result).toEqual(operation);
  });

  it("should read operation from console until it is valid", async () => {
    // Arrange
    const invalidOperation = "a";
    const validOperation = "+";
    readFromConsole
      .mockResolvedValueOnce(invalidOperation)
      .mockResolvedValueOnce(validOperation);

    // Act
    const result = await readOperation();

    // Assert
    expect(readFromConsole).toHaveBeenCalledTimes(2);
    expect(readFromConsole).toHaveBeenNthCalledWith(
      1,
      "Enter operation (+, -, /, *): ",
    );
    expect(readFromConsole).toHaveBeenNthCalledWith(
      2,
      "The input is not a valid operation. Please enter a valid operation (+, -, /, *): ",
    );
    expect(result).toEqual(validOperation);
  });
});
