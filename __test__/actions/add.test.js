const add = require("@/actions/add");

describe("Add action", () => {
  it("should add two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
