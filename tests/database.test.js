const { getErrorSolution } = require("../src/database");

it("Fetches solution for a known error in a stack trace", () => {
  const stackTrace = `
    TypeError: Cannot read property 'x' of undefined
        at Object.<anonymous> (index.js:10:15)
  `;
  const result = getErrorSolution(stackTrace);

  expect(result).toEqual({
    type: "JavaScript",
    description: "TypeError: Cannot read property 'x' of undefined",
    solution:
      "Check if the object is properly initialized before accessing properties.",
    cause: "The object being accessed is null or undefined.",
  });
});

it("Handles unknown errors in a stack trace", () => {
  const stackTrace = `
    UnknownError: Something went wrong
        at SomeComponent (App.js:20:5)
  `;
  const result = getErrorSolution(stackTrace);

  expect(result).toEqual({
    type: "Angular", // Matches the detected source type
    description: "UnknownError: Something went wrong",
    solution: "Please refer to official documentation or debug further.",
    cause: "Unknown error type.", // Default cause
  });
});
