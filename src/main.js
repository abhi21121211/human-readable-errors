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
async function handleError(errorString, language, framework, pretty) {
  // Automatically detect language and framework if not provided
  if (framework === "unknown") {
    framework = "general";
  }
  if (!language || !framework) {
    const detectionResult = detectErrorSource(errorString);
    language = detectionResult.language || "unknown";
    framework = detectionResult.framework || "general";
  }

  const detectedEnvironment = `${language}/${framework}`;

  const parsedStack = parseStackTrace(errorString);
  const parsedError = parseError(errorString, detectedEnvironment);

  if (parsedError.type === "UnknownError") {
    console.warn(
      "Warning: Unknown error type detected. Please check the input error string."
    );
  }

  try {
    const solution = await getErrorSolution(
      language,
      framework,
      parsedError.description
    );
    // console.log(solution, "fffffffffffffffff solution");
    const result = {
      ...parsedError,
      ...solution,
      environment: detectedEnvironment,
      matchScore: solution.matchScore || "N/A",
      stackTrace: parsedStack?.stackTrace || ["No stack trace provided."],
    };
    // console.log(result, "ffffffffff result");
    return pretty ? prettyPrintError(result) : result;
  } catch (err) {
    console.error("Error fetching solution:", err.message);
    return pretty
      ? prettyPrintError({
          error: "An error occurred while fetching the solution.",
          details: err.message,
        })
      : {
          error: "An error occurred while fetching the solution.",
          details: err.message,
        };
  }
}

export { handleError };
