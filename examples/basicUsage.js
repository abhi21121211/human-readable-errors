import { handleError, handlePrettyError } from "../src/main.js";

const errorString = `TypeError : Expected an assignment or function call.`;
console.log("test xyz");
let a = await handleError(errorString);
let b = await handlePrettyError(errorString);
console.log(a, b);
