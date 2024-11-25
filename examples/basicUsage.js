// examples/basicUsag

import { handleError } from "../src/main.js";

// import { handleError } from "../src/main";

const errors = [
  `Error: Cannot read property 'x' of undefined
    at MyComponent (src/app/mycomponent.ts:15:20)`, // Angular
  `TypeError: unsupported operand type(s) for +: 'int' and 'str'
    File "main.py", line 12`, // Python
  `main.go:23:15: undefined: myVariable`, // Go
];

errors.forEach((error, index) => {
  const result = handleError(error);
  console.log(`[Error ${index + 1}]`, result);
});
