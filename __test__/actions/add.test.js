const add = require("@/actions/add");

describe("Add action", () => {
  it("should add two positive numbers", () => {
    // Arrange
    const number1 = 1;
    const number2 = 2;

    // Act
    const result = add(number1, number2);

    // Assert
    expect(result).toBe(3);
  });

  it("should add two negative numbers", () => {
    // Arrange
    const number1 = -10;
    const number2 = -5;

    // Act
    const result = add(number1, number2);

    // Assert
    expect(result).toBe(-15);
  });

  it("should add a positive and a negative number", () => {
    // Arrange
    const number1 = 10;
    const number2 = -5;

    // Act
    const result = add(number1, number2);

    // Assert
    expect(result).toBe(5);
  });

  it("should add float numbers", () => {
    // Arrange
    const number1 = 1.3333333;
    const number2 = 2.5;

    // Act
    const result = add(number1, number2);

    // Assert
    expect(result).toBe(3.8333333);
  });
});
