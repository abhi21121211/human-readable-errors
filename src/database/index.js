import { error } from "console";
import fs from "fs";
import path from "path";
import { getSimilarityScore } from "../utils/similarity.js"; // Ensure this utility is implemented

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
 * Calculates matchScore using getSimilarityScore if no exact match is found.
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

  if (exactMatch) {
    return {
      type: language || exactMatch.type,
      code: exactMatch.code,
      error: exactMatch.error,
      severity: exactMatch.severity,

      description: exactMatch.description,
      cause: exactMatch.cause,
      solution: exactMatch.solution,
      examples: exactMatch.examples,
      reference: exactMatch.links,

      matchScore: "1.00", // Exact match
    };
  }

  // Calculate matchScore for approximate matches
  const scoredMatches = errorMappings.map((err) => {
    const similarity = getSimilarityScore(
      errorDescription.trim().toLowerCase(),
      err.error.trim().toLowerCase()
    );
    return { ...err, matchScore: similarity.toFixed(2) };
  });

  // Find the closest match (highest matchScore)
  const bestMatch = scoredMatches.reduce((prev, current) =>
    parseFloat(current.matchScore) > parseFloat(prev.matchScore)
      ? current
      : prev
  );

  // If the best match has a high similarity score (e.g., >0.7), return it
  if (parseFloat(bestMatch.matchScore) > 0.7) {
    return {
      type: language || bestMatch.type,
      code: bestMatch.code,
      error: bestMatch.error,
      severity: bestMatch.severity,

      description: bestMatch.description,
      cause: bestMatch.cause,
      solution: bestMatch.solution,
      examples: bestMatch.examples,
      reference: bestMatch.links,

      matchScore: bestMatch.matchScore,
    };
  }

  // Enhanced fallback response for no sufficiently similar matches
  return {
    type: "Unknown",
    code: "N/A",
    error: "N/A",
    severity: "N/A",
    description:
      "No exact or sufficiently similar match found for the provided error description. However, here are some steps you can take to debug the issue effectively.",
    cause: [
      "The error might not be present in the human-readable-errors database.",
      "The error description might differ slightly from standard error messages.",
      "There might be a deeper issue related to your code or environment setup.",
    ],
    solution: [
      "Verify the error message for typos or variations.",
      "Ensure the environment (e.g., Node.js, React, Django) is correctly configured.",
      "Check for missing dependencies or incorrect versions in your project.",
      "Search for the error message online to find related discussions or solutions.",
      "Refer to official documentation or community forums for insights.",
    ],
    examples: [
      {
        type: "Example Debugging Process",
        steps: [
          "1. Analyze the error stack trace to locate the source of the issue.",
          "2. Isolate the code snippet where the error occurs and test it independently.",
          "3. Add logging or debugging statements to track variable values and function behavior.",
          "4. Consult project-specific guides or tutorials for common issues.",
        ],
        output: "This process should help narrow down the root cause.",
      },
    ],
    tags: ["Error Handling", "Debugging", "Guidance"],
    reference: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://stackoverflow.com/",
      "https://github.com/",
    ],
    matchScore: "0.00",
  };
}

export { getErrorSolution };
