/**
 * Calculate the similarity score between two strings using Levenshtein distance.
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {number} - Similarity score (0 to 1).
 */
function getSimilarityScore(str1, str2) {
  if (!str1 || !str2) return 0;

  const length1 = str1.length;
  const length2 = str2.length;

  // Calculate Levenshtein distance
  const distanceMatrix = Array.from({ length: length1 + 1 }, () =>
    Array(length2 + 1).fill(0)
  );
  for (let i = 0; i <= length1; i++) distanceMatrix[i][0] = i;
  for (let j = 0; j <= length2; j++) distanceMatrix[0][j] = j;

  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      distanceMatrix[i][j] = Math.min(
        distanceMatrix[i - 1][j] + 1, // Deletion
        distanceMatrix[i][j - 1] + 1, // Insertion
        distanceMatrix[i - 1][j - 1] + cost // Substitution
      );
    }
  }

  const levenshteinDistance = distanceMatrix[length1][length2];
  const score = 1 - levenshteinDistance / Math.max(length1, length2);

  // Weighted scoring: Boost keywords that are critical in error messages
  const importantKeywords = ["TypeError", "ReferenceError", "SyntaxError"];
  const containsKeywords = importantKeywords.some(
    (keyword) => str1.includes(keyword) && str2.includes(keyword)
  );

  return containsKeywords ? score + 0.1 : score; // Bonus for keyword matches
}

export { getSimilarityScore };
