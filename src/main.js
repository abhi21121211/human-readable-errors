// src/main.js

import { parseError } from "./parsers/index.js";
import { getErrorSolution } from "./database/index.js";
import { prettyPrintError } from "./utils/format.js";
import { parseStackTrace } from "./parsers/stackTraceParser.js";
import detectErrorSource from "./utils/sourceDetector.js";

/**
 * Handles an error and provides a human-readable solution.
 * @param {string} errorString - The error message or stack trace.
 * @param {string} language - The programming language (e.g., "javascript").
 * @param {string} framework - The framework/environment (e.g., 'node', 'react').
 * @param {boolean} pretty - Whether to format the output prettily.
 * @param {Object} localDatabase - The pre-bundled local error mappings.
 * @returns {Promise<object|string>} - Human-readable error solution or formatted output.
 */
async function handleError(error) {
  const errorString = String(error);
  let language = "";
  let framework = "";
  if (
    !errorString ||
    errorString === "" ||
    errorString === null ||
    errorString === undefined
  ) {
    return "Error string is empty";
  }
  if (!language || !framework) {
    const detectionResult = detectErrorSource(errorString);
    language = detectionResult.language;
    framework = detectionResult.framework;
  }

  const detectedEnvironment = `${framework}`;

  const parsedStack = parseStackTrace(errorString);
  const parsedError = parseError(errorString, detectedEnvironment);

  if (parsedError.type === "UnknownError") {
    console.warn(
      "Warning: Unknown error type detected. Please check the input error string."
    );
  }

  try {
    const solution = await getErrorSolution(parsedError.description);

    const result = {
      ...parsedError,
      ...solution,
      environment: detectedEnvironment,

      stackTrace: parsedStack?.stackTrace || ["No stack trace provided."],
    };
    // console.log(result, "ffffffffff result");
    return result;
  } catch (err) {
    console.error("Error fetching solution:", err.message);
  }
}

async function handlePrettyError(errorString) {
  if (
    !errorString ||
    errorString === "" ||
    errorString === null ||
    errorString === undefined
  ) {
    return "Error string is empty";
  }
  return prettyPrintError(await handleError(errorString));
}

export { handleError, handlePrettyError };
