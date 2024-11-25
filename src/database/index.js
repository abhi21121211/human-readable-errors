const errorMappings = require("./errorMappings.json");
const { getSimilarityScore } = require("../utils/similarity");

/**
 * Fetch the error solution based on the given stack trace or error message.
 * @param {string} errorMessage - The error message or stack trace.
 * @returns {Object} - Matching error details (type, description, solution, cause) or fallback response.
 */
function getErrorSolution(errorMessage) {
  console.log(`Input errorMessage: "${errorMessage}"`);

  // Step 1: Exact match
  const exactMatch = errorMappings.errors.find(
    (err) => err.error === errorMessage
  );
  if (exactMatch) {
    console.log("Exact match found:", exactMatch);
    return {
      type: "JavaScript",
      description: exactMatch.description,
      solution: exactMatch.solution,
      cause: exactMatch.cause,
    };
  }

  // Step 2: Partial match using similarity scoring
  let bestMatch = null;
  let highestScore = 0;
  const threshold = 0.7; // Adjusted threshold for similarity matches
  errorMappings.errors.forEach((err) => {
    const score = getSimilarityScore(errorMessage, err.error);
    console.log(`Similarity score for "${err.error}": ${score}`);
    if (score > highestScore && score >= threshold) {
      highestScore = score;
      bestMatch = err;
    }
  });

  if (bestMatch) {
    console.log("Best partial match found:", bestMatch);
    return {
      type: "JavaScript",
      description: bestMatch.description,
      solution: bestMatch.solution,
      cause: bestMatch.cause,
    };
  }

  // Step 3: Fallback response for unknown errors
  console.log("No match found, returning fallback response.");
  return {
    type: "Unknown",
    description: "An unrecognized error occurred.",
    solution: "Please refer to official documentation or debug further.",
    cause: "Unknown error type.",
  };
}

module.exports = { getErrorSolution };
