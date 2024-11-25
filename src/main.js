// src/main.js

const { parseError } = require("./parsers");
const { getErrorSolution } = require("./database");
const { prettyPrintError } = require("./utils/format");

function handleError(errorString, environment = "node", pretty = false) {
  const parsedError = parseError(errorString, environment);
  const solution = getErrorSolution(parsedError.type, parsedError.description);

  const result = {
    ...parsedError,
    cause: solution.cause,
    solution: solution.solution,
  };

  return pretty ? prettyPrintError(result) : result;
}

export  handleError ;
