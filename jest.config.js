export default {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.mjs"],
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
