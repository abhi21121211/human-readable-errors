import { handleError, handlePrettyError } from "../src/main.js";

const errorString = `TypeError: Expected an assignment or function call.
    at Object.<anonymous> (/path/to/file.js:10:15)`;
console.log("test xyz");
let a = await handleError(errorString);
let b = await handlePrettyError(errorString);
console.log(a, b);
