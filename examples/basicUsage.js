import { handleError } from "../src/main.js";

const errorString = `Cannot read property 'length' of undefined
    at Object.<anonymous> (/path/to/file.js:10:15)`;

console.log(handleError(errorString));
