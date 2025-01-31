export const errorMappings = [
  {
    _id: { $oid: "674ed4dc9d72fbc8ecb3623d" },
    language: "JavaScript",
    framework: "General",
    type: "TypeError",
    code: "JS001",
    error: "Cannot read property 'length' of undefined",
    severity: "High",
    description:
      "Occurs when trying to access the 'length' property of an undefined variable.",
    cause: [
      "The variable is not initialized or is set to undefined.",
      "A function did not return the expected value.",
    ],
    solution: [
      "Ensure the variable is defined and has the expected value before accessing its properties.",
      "Add null or undefined checks before accessing object properties.",
    ],
    tags: ["TypeError", "undefined", "JavaScript"],
    examples: [
      {
        code: "let arr; console.log(arr.length);",
        output: "TypeError: Cannot read property 'length' of undefined",
        _id: { $oid: "674d795ee0338c35102811ab" },
      },
    ],
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undefined",
    ],
    resources: {
      videos: ["https://www.youtube.com/watch?v=js-undefined-errors"],
      tutorials: ["https://www.example.com/javascript-undefined-errors"],
    },
    meta: {
      added_by: "system",
      added_on: {
        $date: { $numberLong: "1720128000000" },
      },
      updated_on: {
        $date: { $numberLong: "1720128000000" },
      },
    },
    __v: { $numberInt: "0" },
  },
  {
    _id: { $oid: "674ed4dc9d72fbc8ecb3623e" },
    language: "JavaScript",
    framework: "General",
    type: "Error",
    code: "JS002",
    error: "Unexpected token",
    severity: "High",
    description:
      "Occurs when the JavaScript engine encounters unexpected syntax.",
    cause: [
      "A syntax error in the code, such as missing brackets, parentheses, or incorrect use of keywords.",
      "Improperly formatted JSON data.",
    ],
    solution: [
      "Check the syntax around the location of the error.",
      "Use a linter to identify syntax issues before running the code.",
    ],
    tags: ["SyntaxError", "JavaScript", "syntax"],
    examples: [
      {
        code: "let obj = {key: 'value',};",
        output: "SyntaxError: Unexpected token ','",
        _id: { $oid: "674d795ee0338c35102811ac" },
      },
    ],
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token",
    ],
    resources: {
      videos: ["https://www.youtube.com/watch?v=js-syntax-errors"],
      tutorials: ["https://www.example.com/javascript-syntax-errors"],
    },
    meta: {
      added_by: "system",
      added_on: {
        $date: { $numberLong: "1720128000000" },
      },
      updated_on: {
        $date: { $numberLong: "1720128000000" },
      },
    },
    __v: { $numberInt: "0" },
  },
  {
    _id: { $oid: "674ed4dc9d72fbc8ecb3623f" },
    language: "JavaScript",
    framework: "General",
    type: "Error",
    code: "JS003",
    error: "Variable is not defined",
    severity: "High",
    description:
      "Occurs when trying to access a variable that has not been declared or is out of scope.",
    cause: [
      "Using a variable before declaring it.",
      "Misspelling a variable name.",
      "Using a variable outside of its scope.",
    ],
    solution: [
      "Ensure all variables are properly declared before use.",
      "Check variable names for typos.",
      "Verify variable scoping and accessibility.",
    ],
    tags: ["ReferenceError", "JavaScript", "scope"],
    examples: [
      {
        code: "console.log(undeclaredVariable);",
        output: "ReferenceError: undeclaredVariable is not defined",
        _id: { $oid: "674d795ee0338c35102811ad" },
      },
    ],
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined",
    ],
    resources: {
      videos: ["https://www.youtube.com/watch?v=js-reference-errors"],
      tutorials: ["https://www.example.com/javascript-reference-errors"],
    },
    meta: {
      added_by: "system",
      added_on: {
        $date: { $numberLong: "1720128000000" },
      },
      updated_on: {
        $date: { $numberLong: "1720128000000" },
      },
    },
    __v: { $numberInt: "0" },
  },
  {
    _id: { $oid: "674ed4dc9d72fbc8ecb36240" },
    language: "JavaScript",
    framework: "General",
    type: "Error",
    code: "JS004",
    error: "Invalid array length",
    severity: "Medium",
    description:
      "Occurs when creating an array with an invalid length or using a method with an inappropriate argument.",
    cause: [
      "Attempting to create an array with a negative length.",
      "Passing an invalid length to array methods.",
      "Recursive function causing stack overflow.",
    ],
    solution: [
      "Validate array lengths before creation.",
      "Use appropriate array method arguments.",
      "Implement proper recursion termination conditions.",
    ],
    tags: ["RangeError", "JavaScript", "array"],
    examples: [
      {
        code: "let arr = new Array(-1);",
        output: "RangeError: Invalid array length",
        _id: { $oid: "674d795ee0338c35102811ae" },
      },
    ],
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length",
    ],
    resources: {
      videos: ["https://www.youtube.com/watch?v=js-array-errors"],
      tutorials: ["https://www.example.com/javascript-array-errors"],
    },
    meta: {
      added_by: "system",
      added_on: {
        $date: { $numberLong: "1720128000000" },
      },
      updated_on: {
        $date: { $numberLong: "1720128000000" },
      },
    },
    __v: { $numberInt: "0" },
  },
  {
    _id: { $oid: "674ed4dc9d72fbc8ecb36241" },
    language: "JavaScript",
    framework: "General",
    type: "Error",
    code: "JS005",
    error: "Cannot call method of undefined",
    severity: "High",
    description:
      "Occurs when attempting to call a method on an undefined or null object.",
    cause: [
      "Calling a method on an object that is not initialized.",
      "Incorrect object reference due to asynchronous operations.",
      "Unhandled null or undefined return values.",
    ],
    solution: [
      "Add null/undefined checks before method calls.",
      "Use optional chaining (?.) for safer method access.",
      "Properly handle asynchronous data fetching.",
    ],
    tags: ["TypeError", "undefined", "method", "JavaScript"],
    examples: [
      {
        code: "let obj = null;\nobj.someMethod();",
        output: "TypeError: Cannot read property 'someMethod' of null",
        _id: { $oid: "674d795ee0338c35102811af" },
      },
    ],
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cannot_call_method",
    ],
    resources: {
      videos: ["https://www.youtube.com/watch?v=js-method-undefined-errors"],
      tutorials: ["https://www.example.com/javascript-method-undefined-errors"],
    },
    meta: {
      added_by: "system",
      added_on: {
        $date: { $numberLong: "1720128000000" },
      },
      updated_on: {
        $date: { $numberLong: "1720128000000" },
      },
    },
    __v: { $numberInt: "0" },
  },
];
