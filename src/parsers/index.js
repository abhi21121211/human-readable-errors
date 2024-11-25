import { nodeParser } from "./nodeParser.js";
import { reactParser } from "./reactParser.js";
import { parseAngularError } from "./angularParser.js";
import { parsePythonError } from "./pythonParser.js";
import { parseGoError } from "./goParser.js";

/**
 * Routes error strings to the appropriate parser based on environment or patterns.
 * @param {string} errorString - The error message or stack trace.
 * @param {string} environment - The development environment (e.g., 'node', 'react').
 * @returns {object} - Parsed error details.
 */
function parseError(errorString, environment = null) {
  if (environment === "node") return nodeParser(errorString);
  if (environment === "react") return reactParser(errorString);
  if (environment === "angular") return parseAngularError(errorString);
  if (environment === "python") return parsePythonError(errorString);
  if (environment === "go") return parseGoError(errorString);

  if (errorString.includes(" at ") && errorString.includes("Error: ")) {
    return reactParser(errorString) || parseAngularError(errorString);
  }

  return nodeParser(errorString);
}

export { parseError };
