//src/database/index.js

import fs from "fs";
import path from "path";

/**
 * Loads error mappings for a given language and framework.
 * @param {string} language - The programming language (e.g., "javascript").
 * @param {string} framework - The framework/environment (e.g., "node").
 * @returns {Object[]} - Array of error mappings.
 */
function loadErrorMappings(language, framework) {
  const databasePath = path.resolve("database", language, `${framework}.json`);
  console.log("Resolved database path:", databasePath);

  if (!fs.existsSync(databasePath)) {
    throw new Error(`Error mappings not found for ${language}/${framework}`);
  }

  const errorMappings = JSON.parse(fs.readFileSync(databasePath, "utf8"));
  return errorMappings.errors || [];
}

/**
 * Fetches the error solution based on language, framework, and error description.
 * @param {string} language - The programming language (e.g., "javascript").
 * @param {string} framework - The framework/environment (e.g., "node").
 * @param {string} errorDescription - The error message or parsed description.
 * @returns {Object} - Matching error details or fallback response.
 */
function getErrorSolution(language, framework, errorDescription) {
  const errorMappings = loadErrorMappings(language, framework);

  // Attempt exact match
  const exactMatch = errorMappings.find(
    (err) =>
      err.error.trim().toLowerCase() === errorDescription.trim().toLowerCase()
  );
  // console.log(exactMatch, "ffffffff exactMatch");
  if (exactMatch) {
    return {
      type: language,
      description: exactMatch.description,
      solution: exactMatch.solution,
      cause: exactMatch.cause,
      suggestions: exactMatch.suggestions,
      matchScore: "1.00",
    };
  }

  // Return fallback response if no matches found
  return {
    type: "Unknown",
    description: "No exact match found for the provided error description.",
    solution: "Refer to documentation for further troubleshooting.",
    suggestions: [
      "Check error database for updates.",
      "Provide more specific error details.",
      "Consult official documentation or forums for guidance.",
    ],
    matchScore: "N/A",
  };
}

export { getErrorSolution };
