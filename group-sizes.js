const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a class size: "));
let result = num / 3;

// three scenarios

if (num % 3 === 0) {
    console.log(result + " groups of 3 students");
} else if (num % 3 === 2) {
    console.log(Math.trunc(result) + " groups of 3 students and 1 group of 2 students");
} else if (num % 3 === 1) {
    console.log(Math.trunc(result)-1 + " groups of 3 students and 2 groups of 2 students");

}

/* go over: 

*/