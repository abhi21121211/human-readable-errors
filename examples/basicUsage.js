import { handleError, handlePrettyError } from "../src/main.js";

const errorString = `TypeError : asdkjahsdkjsadh asdkjhds asdkjahdsh `;
console.log("test xyz");
let a = await handleError(errorString);
let b = await handlePrettyError(errorString);
console.log(a, b);
