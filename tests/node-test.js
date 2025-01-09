// const { initializeNodeErrorHandler } = require("./src/main"); // Update path to your library build

import { initializeNodeErrorHandler } from "../src/main.js";

// Initialize error handling
initializeNodeErrorHandler();

// Simulate uncaught exception
setTimeout(() => {
  throw new Error("Simulated uncaught exception in Node.js");
}, 1000);

// Simulate unhandled promise rejection
setTimeout(() => {
  Promise.reject(new Error("Simulated unhandled promise rejection"));
}, 2000);
