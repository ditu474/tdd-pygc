const divide = require("@/actions/divide");

describe("Divide action", () => {
  it("should divide two positive numbers", () => {
    // Arrange
    const number1 = 1;
    const number2 = 3;

    // Act
    const result = divide(number1, number2);

    // Assert
    expect(result).toBe(0.3333333333333333);
  });
});
