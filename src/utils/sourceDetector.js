const detectErrorSource = (errorMessage) => {
  if (/TypeError|ReferenceError|SyntaxError|RangeError/.test(errorMessage)) {
    return "JavaScript";
  }
  if (/Traceback|IndentationError|SyntaxError|NameError/.test(errorMessage)) {
    return "Python";
  }
  if (/Angular|ErrorInjector|ng|ZoneAwareError/.test(errorMessage)) {
    return "Angular";
  }
  if (/panic:|runtime|go error/i.test(errorMessage)) {
    return "Go";
  }
  return "Unknown"; // Default to unknown if no patterns match
};

export default detectErrorSource;
