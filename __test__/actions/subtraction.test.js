const subtraction = require("@/actions/subtraction");

describe("Subtraction action", () => {
  it("should subtract two positive numbers", () => {
    // Arrange
    const number1 = 1;
    const number2 = 2;

    // Act
    const result = subtraction(number1, number2);

    // Assert
    expect(result).toBe(-1);
  });
});
