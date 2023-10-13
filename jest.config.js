module.exports = {
  rootDir: "__test__",
  testEnvironment: "node",
  testTimeout: 10000,
  testMatch: ["**/*.test.js"],
  moduleNameMapper: {
    "@/test/(.*)": "<rootDir>/$1",
    "@/(.*)": "<rootDir>/../src/$1",
  },
};
