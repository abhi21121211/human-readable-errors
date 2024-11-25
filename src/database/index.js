import errorMappings from "../database/errorMappings.json" assert { type: "json" };
import { getSimilarityScore } from "../utils/similarity.js";

/**
 * Fetches the error solution based on the given error type and description.
 * @param {string} errorType - The type of the error (e.g., "TypeError").
 * @param {string} errorDescription - The detailed error description or message.
 * @param {number} [threshold=0.65] - Minimum similarity score to consider a match.
 * @returns {Object} - Matching error details (type, description, solution, cause, matchScore, suggestions).
 */
function getErrorSolution(errorType, errorDescription, threshold = 0.65) {
  if (!errorType || !errorDescription) {
    return {
      type: "Error",
      description: "Invalid error type or description provided.",
      solution:
        "Ensure the error type and description are correctly formatted.",
      matchScore: "N/A",
      suggestions: ["Provide valid error details for analysis."],
    };
  }

  console.log(
    `[DEBUG] Searching solution for: Type="${errorType}", Description="${errorDescription}"`
  );

  // Try exact match first
  const exactMatch = errorMappings.errors.find(
    (err) =>
      err.type === errorType &&
      err.description.toLowerCase() === errorDescription.toLowerCase()
  );

  if (exactMatch) {
    console.log("[DEBUG] Exact match found:", exactMatch);
    return {
      type: exactMatch.type || errorType,
      description: exactMatch.description || "No description provided.",
      solution: exactMatch.solution || "No solution provided.",
      cause: exactMatch.cause || "Cause unknown.",
      matchScore: "1.00", // Exact match
      suggestions: exactMatch.suggestions || [],
    };
  }

  // Perform partial match using similarity scoring
  let bestMatch = null;
  let highestScore = 0;

  console.log(
    `[DEBUG] Performing similarity-based matching with threshold: ${threshold}`
  );
  errorMappings.errors.forEach((err) => {
    // Combine type and description for similarity matching
    const combinedErrorString = `${err.type}: ${err.description}`;
    const queryString = `${errorType}: ${errorDescription}`;
    const score = getSimilarityScore(queryString, combinedErrorString);

    if (score > highestScore && score >= threshold) {
      highestScore = score;
      bestMatch = err;
    }
  });

  if (bestMatch) {
    console.log(
      "[DEBUG] Best partial match found:",
      bestMatch,
      `Score: ${highestScore}`
    );
    return {
      type: bestMatch.type || errorType,
      description: bestMatch.description || "No description provided.",
      solution: bestMatch.solution || "No solution provided.",
      cause: bestMatch.cause || "Cause unknown.",
      matchScore: highestScore.toFixed(2),
      suggestions: bestMatch.suggestions || [
        "Double-check the error details.",
        "Consult official documentation.",
      ],
    };
  }

  // No matches found: Provide fallback
  console.warn(
    "[WARNING] No matches found for the error type and description."
  );

  // Infer potential error type based on keywords
  const inferredType = inferErrorType(errorType, errorDescription);

  return {
    type: inferredType,
    description: "No exact or close match found for the provided error.",
    solution: "Refer to the documentation for unknown errors.",
    matchScore: "N/A",
    suggestions: getDefaultSuggestions(inferredType),
  };
}

/**
 * Infers the potential error type based on type and description keywords.
 * @param {string} errorType - The type of the error.
 * @param {string} errorDescription - The detailed error description.
 * @returns {string} - Inferred error type.
 */
function inferErrorType(errorType, errorDescription) {
  if (errorType.includes("TypeError") || errorDescription.includes("undefined"))
    return "TypeError";
  if (
    errorType.includes("ReferenceError") ||
    errorDescription.includes("not defined")
  )
    return "ReferenceError";
  if (
    errorType.includes("SyntaxError") ||
    errorDescription.includes("Unexpected")
  )
    return "SyntaxError";
  if (errorType.includes("RangeError") || errorDescription.includes("range"))
    return "RangeError";
  return "UnknownError";
}

/**
 * Provides default suggestions based on the inferred error type.
 * @param {string} errorType - The inferred error type.
 * @returns {Array} - List of suggestions for resolving the error.
 */
function getDefaultSuggestions(errorType) {
  switch (errorType) {
    case "TypeError":
      return [
        "Check if variables are initialized before accessing their properties.",
        "Ensure the correct data type is used in operations.",
      ];
    case "ReferenceError":
      return [
        "Verify that all variables and functions are declared before use.",
        "Check for typos in variable or function names.",
      ];
    case "SyntaxError":
      return [
        "Ensure the code syntax follows JavaScript standards.",
        "Look for missing brackets, parentheses, or other syntax issues.",
      ];
    case "RangeError":
      return [
        "Verify that array indices and loop bounds are within valid ranges.",
        "Check for infinite recursion or excessive memory usage.",
      ];
    default:
      return [
        "Provide more specific error details.",
        "Consult the official documentation or forums for guidance.",
      ];
  }
}

export { getErrorSolution };
