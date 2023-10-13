const multiply = require("@/actions/multiply");

describe("Multiply action", () => {
  it("should multiply two positive numbers", () => {
    // Arrange
    const number1 = 0.3;
    const number2 = 0.3;

    // Act
    const result = multiply(number1, number2);

    // Assert
    expect(result).toBe(0.09);
  });
});
