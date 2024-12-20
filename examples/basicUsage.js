import { handleError, handlePrettyError } from "../src/main.js";

const errorString = `TypeError : Expected an assignment or function
    at Object.<anonymous> (/path/to/file.js:10:15)
    at Module._compile (node:internal/modules/cjs/loader:1102:14)}`;
console.log("test xyz");
let a = await handleError(errorString);
let b = await handlePrettyError(errorString);
console.log(a, b);
