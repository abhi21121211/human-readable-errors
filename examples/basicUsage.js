// examples/basicUsag

import { handleError } from "../src/main.js";

// import { handleError } from "../src/main";
const errorString = "TypeError: Cannot read property 'length' of undefined";
const environment = "node";
const result = handleError(errorString, environment, true);
console.log(result);
