// src/database/index.js
import axios from "axios";
import { errorMappings } from "./errorMappings.js";
import { parse } from "dotenv";

const API_BASE_URL = "https://human-readable-errors-db.onrender.com";
// const API_BASE_URL = "http://localhost:4000";
/**
 * Load error mappings from the local JSON file
 * @returns {Array} - Local error mappings
 */
function loadLocalErrorMappings(errorDescription) {
  return errorMappings.filter(
    (mapping) =>
      mapping.description == errorDescription ||
      mapping.error == errorDescription
  );
}

/**
 * Fetch remote error mappings using the API
 * @param {string} errorDescription - The error description to search for
 * @returns {Array|null} - Remote error mappings or null if the request fails
 */
async function fetchRemoteErrorMappings(errorDescription) {
  try {
    const response = await axios.get(`${API_BASE_URL}/errors/search`, {
      params: { query: errorDescription },
    });
    return response.data.results || [];
  } catch (err) {
    console.error("Error fetching data from the server:", err.message);
    return null; // Indicate failure to fetch remote data
  }
}

/**
 * Add unmatched errors to the rawErrors database for analysis
 * @param {Object} error - The error object to add
 * @returns {Object|null} - The response from the server or null on failure
 */
async function addToRawErrorsDatabase(error) {
  try {
    const response = await axios.post(`${API_BASE_URL}/rowErrors`, error);
    return response.data;
  } catch (err) {
    console.error("Error adding to rawErrors database:", err.message);
    return null;
  }
}

/**
 * Get error mappings from remote API or local fallback
 * @param {string} errorDescription - The error description to search for
 * @returns {Array} - List of error mappings
 */
async function getErrorMappings(errorDescription) {
  // Try to fetch data from the remote API
  const remoteData = await fetchRemoteErrorMappings(errorDescription);

  if (remoteData && remoteData.length > 0 && remoteData === null) {
    return remoteData;
  }

  // Fall back to local error mappings
  console.warn("Falling back to local database.");
  return loadLocalErrorMappings(errorDescription);
}

/**
 * Get error solution based on error description
 * @param {string} errorDescription - The error description to search for
 * @returns {Object} - A detailed error solution or fallback response
 */
async function getErrorSolution(errorDescription) {
  const errorMappings = await getErrorMappings(errorDescription);
  // If a match is found, return the best match
  if (errorMappings && errorMappings.length > 0) {
    const [bestMatch] = errorMappings; // Assume the first result is the best match
    return {
      rowError: errorDescription,

      type: bestMatch.type || "Unknown",
      code: bestMatch.code || "N/A",
      error: bestMatch.error || "N/A",
      severity: bestMatch.severity || "N/A",
      description: bestMatch.description || "No description available.",
      cause: bestMatch.cause || ["Cause not specified."],
      solution: bestMatch.solution || ["Solution not specified."],
      examples: bestMatch.examples || [],
      tags: bestMatch.tags || [],
      reference: bestMatch.links || [],
      resources: bestMatch.resources || {},
    };
  }

  // Add unmatched error to rawErrors database for analysis
  await addToRawErrorsDatabase({
    rowError: errorDescription,
  });

  // Return a detailed fallback response
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
  };
}

export { getErrorSolution };
