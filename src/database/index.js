import errorMappings from "../database/errorMappings.json" assert { type: "json" };
import { getSimilarityScore } from "../utils/similarity.js";

/**
 * Fetches the error solution based on the given error message.
 * @param {string} errorMessage - The error message or stack trace.
 * @returns {Object} - Matching error details (type, description, solution, cause, matchScore, suggestions).
 */
function getErrorSolution(errorMessage) {
  // Try exact match first
  const exactMatch = errorMappings.errors.find(
    (err) => err.error === errorMessage
  );
  if (exactMatch) {
    return {
      type: "JavaScript",
      description: exactMatch.description || "No description provided.",
      solution: exactMatch.solution || "No solution provided.",
      cause: exactMatch.cause || "Cause unknown.",
      matchScore: "1.00", // Exact match
    };
  }

  // Perform partial match using similarity scoring
  let bestMatch = null;
  let highestScore = 0;
  const threshold = 0.65; // Minimum score for a match
  // console.log(errorMessage, "fffffffffffff errorMessage");
  errorMappings.errors.forEach((err) => {
    // console.log(errorMessage, "fffffffffffff err.error");
    const score = getSimilarityScore(errorMessage, err.error);
    // console.log(score, "fffffffffffff score");
    if (score > highestScore && score >= threshold) {
      highestScore = score;
      bestMatch = err;
    }
  });

  // console.log(bestMatch, "ffffffffffff bestMatch");
  if (bestMatch) {
    return {
      type: "JavaScript",
      description: bestMatch.description || "No description provided.",
      solution: bestMatch.solution || "No solution provided.",
      cause: bestMatch.cause || "Cause unknown.",
      matchScore: highestScore.toFixed(2),
    };
  }

  // If no matches found, return a default fallback response
  return {
    type: "Unknown",
    description: "No exact or close match found for the provided error.",
    solution: "Refer to the documentation for unknown errors.",
    suggestions: [
      "Check the database for potential updates.",
      "Provide more specific error details.",
      "Consult the official documentation for debugging steps.",
    ],
    matchScore: "N/A",
  };
}

export { getErrorSolution };
