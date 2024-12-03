// src/utils/format.js

function prettyPrintError(errorObject) {
  console.log(errorObject, "fffffffffffff errorObject");
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
  const formattedCauses = errorObject.cause
    ?.map((cause, index) => `${yellow}  ${index + 1}. ${cause}${reset}`)
    .join("\n");

  // Format solutions as a bullet list
  const formattedSolutions = errorObject.solution
    .map((solution, index) => `${green}  ${index + 1}. ${solution}${reset}`)

    .join("\n");
  // Format examples with code and output

  const formattedExamples = errorObject.examples
    .map(
      (example, index) =>
        `${codeEmoji} Example ${index + 1}:\n    ${cyan}Code:${reset}\n      ${
          example.code
        }\n    ${magenta}Output:${reset}\n      ${example.output}`
    )
    .join("\n");

  // Format stack trace for better readability
  const formattedStackTrace = errorObject.stackTrace
    .map(
      (trace, index) =>
        `${stackEmoji} ${index + 1}. Function: ${trace.functionName}, File: ${
          trace.file
        } (Line: ${trace.lineNumber}, Column: ${trace.columnNumber})`
    )
    .join("\n");

  return `
${red}${bold}[ERROR INSIGHT]${reset}
${bold}${yellow}⚡ Type:${reset} ${errorObject.type}
${bold}${blue}🌐 Environment:${reset} ${errorObject.environment}
${bold}${red}❗ Description:${reset} ${errorObject.description}
${bold}${magenta}📍 Location:${reset} ${errorObject.file} (Line: ${
    errorObject.lineNumber
  }, Column: ${errorObject.columnNumber})
${bold}${cyan}🆔 Code:${reset} ${errorObject.code}
${bold}${yellow}🔥 Severity:${reset} ${errorObject.severity}

${bold}${red}${warningEmoji} Causes:${reset}
${formattedCauses}

${bold}${green}${checkEmoji} Solutions:${reset}
${formattedSolutions}

${bold}${codeEmoji} Examples:${reset}
${formattedExamples}

${bold}${stackEmoji} Stack Trace:${reset}
${formattedStackTrace}

${bold}${linkEmoji} References:${reset}
${errorObject.reference.map((ref) => `${blue}${ref}${reset}`).join("\n")}

${bold}🎯 Match Score:${reset} ${errorObject.matchScore}
`;
}

export { prettyPrintError };
