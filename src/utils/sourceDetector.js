/**
 * Detects the source environment (e.g., Node.js, React, Angular, Python, Django, etc.) based on the error string.
 * @param {string} errorString - The error string to analyze.
 * @returns {object} - The detected environment with language, framework, and confidence score.
 */
function detectErrorSource(errorString) {
  console.log(errorString, "Detected error string");

  const environments = [
    // Node.js Specific Errors
    {
      language: "javascript",
      framework: "node",
      patterns: [
        /internal\/modules/i,
        /require\(/i,
        /process\./i,
        /fs\./i,
        /path\./i,
        /module\./i,
        /at process.nextTick/i,
      ],
    },
    // React Specific Errors
    {
      language: "javascript",
      framework: "react",
      patterns: [
        /React/i,
        /render/i,
        /useState/i,
        /useEffect/i,
        /componentDidMount/i,
        /props\./i,
        /state\./i,
      ],
    },
    // Angular Specific Errors
    {
      language: "javascript",
      framework: "angular",
      patterns: [
        /Angular/i,
        /ngOnInit/i,
        /ngModule/i,
        /zone\.js/i,
        /core\/esm5/i,
      ],
    },
    // Vue Specific Errors
    {
      language: "javascript",
      framework: "vue",
      patterns: [/Vue/i, /v-bind/i, /v-if/i, /v-for/i, /VueCompiler/i],
    },
    // Django Specific Errors
    {
      language: "python",
      framework: "django",
      patterns: [
        /django/i,
        /middleware/i,
        /views/i,
        /models\./i,
        /TemplateDoesNotExist/i,
      ],
    },
    // Flask Specific Errors
    {
      language: "python",
      framework: "flask",
      patterns: [/Flask/i, /werkzeug/i, /jinja2/i, /RoutingException/i],
    },
    // Java Spring Specific Errors
    {
      language: "java",
      framework: "spring",
      patterns: [
        /spring/i,
        /beans/i,
        /context/i,
        /NullPointerException/i,
        /IllegalStateException/i,
      ],
    },
    // Java General Errors
    {
      language: "java",
      framework: "general",
      patterns: [
        /Exception/i,
        /NullPointerException/i,
        /ClassNotFoundException/i,
      ],
    },
  ];

  // Iterate over environments and check patterns
  for (const env of environments) {
    for (const pattern of env.patterns) {
      if (pattern.test(errorString)) {
        const detectionResult = {
          language: env.language,
          framework: env.framework,
          confidence: "High",
        };
        console.log(detectionResult, "ffffffffffffff detectionResult");
        return detectionResult;
      }
    }
  }

  // Fallback checks for general errors
  if (/TypeError|ReferenceError|SyntaxError/i.test(errorString)) {
    return {
      language: "javascript",
      framework: "general",
      confidence: "Medium",
    };
  }
  if (/Traceback|AttributeError|KeyError/i.test(errorString)) {
    return { language: "python", framework: "general", confidence: "Medium" };
  }
  if (/Exception|Error/i.test(errorString)) {
    return { language: "unknown", framework: "general", confidence: "Low" };
  }

  // Fallback if no match found
  return { language: "unknown", framework: "unknown", confidence: "Low" };
}

export default detectErrorSource;
