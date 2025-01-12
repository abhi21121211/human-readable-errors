// src/utils/format.js

function prettyPrintError(errorObject) {
  // Colors (ANSI escape codes)
  const reset = "\x1b[0m";
  const red = "\x1b[31m";
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const blue = "\x1b[34m";
  const magenta = "\x1b[35m";
  const cyan = "\x1b[36m";
  const bold = "\x1b[1m";

  // Emojis
  const warningEmoji = "⚠️";
  const checkEmoji = "✅";
  const codeEmoji = "💻";
  const stackEmoji = "📂";
  const linkEmoji = "🔗";

  // Format causes as a bullet list
  const formattedCauses =
    errorObject?.cause
      ?.map((cause, index) => `${yellow}  ${index + 1}. ${cause}${reset}`)
      .join("\n") || `${yellow}No causes available.${reset}`;

  // Format solutions as a bullet list
  const formattedSolutions =
    errorObject?.solution
      ?.map((solution, index) => `${green}  ${index + 1}. ${solution}${reset}`)
      .join("\n") || `${green}No solutions available.${reset}`;

  // Format examples with code and output
  const formattedExamples =
    errorObject?.examples
      ?.map(
        (example, index) =>
          `${codeEmoji} Example ${
            index + 1
          }:\n    ${cyan}Code:${reset}\n      ${
            example.code
          }\n    ${magenta}Output:${reset}\n      ${example.output || "N/A"}`
      )
      .join("\n") || `${cyan}No examples available.${reset}`;

  // Format stack trace for better readability
  const formattedStackTrace =
    errorObject?.stackTrace
      ?.map(
        (trace, index) =>
          `${stackEmoji} ${index + 1}. Function: ${
            trace.functionName || "N/A"
          }, File: ${trace.file || "N/A"} (Line: ${
            trace.lineNumber || "N/A"
          }, Column: ${trace.columnNumber || "N/A"})`
      )
      .join("\n") || `${stackEmoji} No stack trace available.${reset}`;

  // Format references
  const formattedReferences =
    errorObject?.reference?.map((ref) => `${blue}${ref}${reset}`).join("\n") ||
    `${blue}No references available.${reset}`;

  // Format tags
  const formattedTags =
    errorObject?.tags?.map((tag) => `${magenta}${tag}${reset}`).join(", ") ||
    `${magenta}No tags available.${reset}`;

  // Format additional resources
  const formattedResources = `
${bold}${linkEmoji} Videos:${reset}
${
  errorObject?.resources?.videos
    ?.map((video) => `${cyan}${video}${reset}`)
    .join("\n") || "None"
}

${bold}${linkEmoji} Tutorials:${reset}
${
  errorObject?.resources?.tutorials
    ?.map((tutorial) => `${cyan}${tutorial}${reset}`)
    .join("\n") || "None"
}
`;

  return `
${red}${bold}[ERROR INSIGHT]${reset}
${bold}${yellow}⚡ Type:${reset} ${errorObject?.type || "Unknown"}
${bold}${blue}🌐 Environment:${reset} ${errorObject?.environment || "Unknown"}
${bold}${red}❗ Description:${reset} ${
    errorObject?.description || "No description provided."
  }
${bold}${magenta}📍 Location:${reset} ${
    errorObject?.file || "Unknown"
  } (Line: ${errorObject?.lineNumber || "N/A"}, Column: ${
    errorObject?.columnNumber || "N/A"
  })
${bold}${cyan}🆔 Code:${reset} ${errorObject?.code || "N/A"}
${bold}${yellow}🔥 Severity:${reset} ${errorObject?.severity || "N/A"}

${bold}${magenta}🔖 Tags:${reset} ${formattedTags}

${bold}${red}${warningEmoji} Causes:${reset}
${formattedCauses}

${bold}${green}${checkEmoji} Solutions:${reset}
${formattedSolutions}

${bold}${codeEmoji} Examples:${reset}
${formattedExamples}

${bold}${stackEmoji} Stack Trace:${reset}
${formattedStackTrace}

${bold}${linkEmoji} References:${reset}
${formattedReferences}

${formattedResources}

`;
}

export { prettyPrintError };
