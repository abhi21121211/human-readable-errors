export default {
  testEnvironment: "node", // Use the Node.js environment
  testMatch: ["**/tests/**/*.test.mjs"], // Match test files with .mjs extension
  transform: {}, // No need for transformation if using native ESM
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Resolve .js file paths correctly
  },
};
