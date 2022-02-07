const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a class size: "));
let result = num / 3;

// three scenarios

if (num % 3 === 0) {
    console.log(result);
} else if (num % 3 === 2) {
    console.log(Math.round(result));
} else if (num % 3 === 1) {
    console.log(Math.round(result)+1);
}