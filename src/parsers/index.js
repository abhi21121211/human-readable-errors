// src/parsers/index.js

const { parseNodeError } = require("./nodeParser");
const { parseReactError } = require("./reactParser");
const { parseAngularError } = require("./angularParser");
const { parsePythonError } = require("./pythonParser");
const { parseGoError } = require("./goParser");
const { parseStackTrace } = require("./stackTraceParser");

function parseError(errorString, environment = null) {
  // Route to specific parsers if the environment is specified
  if (environment === "node") return parseNodeError(errorString);
  if (environment === "react") return parseReactError(errorString);
  if (environment === "angular") return parseAngularError(errorString);
  if (environment === "python") return parsePythonError(errorString);
  if (environment === "go") return parseGoError(errorString);

  // Auto-detection based on error patterns
  if (errorString.includes("Error: ") && errorString.includes(" at ")) {
    return parseAngularError(errorString) || parseReactError(errorString);
  }

  if (errorString.includes('File "') && errorString.includes("line ")) {
    return parsePythonError(errorString);
  }

  if (errorString.match(/:\d+:\d+:/)) {
    return parseGoError(errorString);
  }

  return parseNodeError(errorString); // Default to Node.js
}

module.exports = { parseError, parseStackTrace };
