const readFromConsole = require("@/services/readFromConsole");

const mockQuestion = jest.fn();
jest.mock("readline", () => ({
  createInterface: () => ({
    question: mockQuestion,
  }),
}));

describe("Read from console service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should read a value from console", async () => {
    // Arrange
    const input = "123";
    const question = "test question";
    mockQuestion.mockImplementation((_, cb) => cb(input));

    // Act
    const result = await readFromConsole("test question");

    // Assert
    expect(mockQuestion).toHaveBeenCalledWith(question, expect.any(Function));
    expect(result).toBe(input);
  });
});
