const prompt = require("prompt-sync")();

let mass = Number(prompt("Enter weight on Earth in lbs: "));
let planet = Number(prompt("Enter planet number: 1.Venus 2.Mars 3.Jupiter 4.Saturn 5.Uranus 6.Neptune"));

if (planet === 1){
    let result = mass * 0.78;
    console.log(result);
} else if (planet === 2){
    let result = mass * 0.39;
    console.log(result);
} else if (planet === 3){
    let result = mass * 2.65;
    console.log(result);
} else if (planet === 4){
    let result = mass * 1.17;
    console.log(result);
} else if (planet === 5){
    let result = mass * 1.05;
    console.log(result);
} else if (planet === 6){
    let result = mass * 1.23;
    console.log(result);
}