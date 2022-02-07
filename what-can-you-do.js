const prompt = require("prompt-sync")();

let num = Number(prompt("Enter your age: "));

if (num < 16) {
    console.log("You can't drive.");
} else if ( num === 16 || num === 17) {
    console.log("You can drive but not vote.");
} else if ( num === 18 || num < 24 || num === 24) {
    console.log("You can vote but not rent a car.");
} else {
    console.log("You can do pretty much anything.");
}