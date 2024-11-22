// src/utils/similarity.js

// Simple string similarity function to find the closest match
function calculateSimilarity(str1, str2) {
  const length = Math.max(str1.length, str2.length);
  const differences = Array.from(str1).reduce(
    (diff, char, i) => diff + (char !== str2[i] ? 1 : 0),
    Math.abs(str1.length - str2.length)
  );
  return 1 - differences / length;
}

function findClosestMatch(input, candidates) {
  let closestError = null;
  let highestSimilarity = 0;

  for (const candidate in candidates) {
    const similarity = calculateSimilarity(input, candidate);
    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      closestError = candidate;
    }
  }

  return { closestError, similarity: highestSimilarity };
}

module.exports = { calculateSimilarity, findClosestMatch };
