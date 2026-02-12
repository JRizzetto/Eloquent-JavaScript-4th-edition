// // JavaScript provides a thing called a binding, or variable.
// let caught = 5 * 5;

// let ten = 10;
// console.log(ten * ten);
// // → 100

// // When a binding points at a value, that does not mean it is tied to that value forever.
// let mood = "light";
// console.log(mood);
// // → light
// mood = "dark";
// console.log(mood);
// // → dark

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);
// // → 105

// // A single let statement may define multiple bindings. The definitions must be separated by commas:
// let one = 1,
//   two = 2;
// console.log(one + two);
// // → 3

// // The words var and const can also be used to create bindings, in a similar fashion to let.
// var name = "Ayda";
// const greeting = "Hello ";
// console.log(greeting + name);
// // → Hello Ayda

// // For example, the function Math.max takes any amount of number arguments and gives back the greatest.
// console.log(Math.max(2, 4));
// // → 4

// console.log(Math.min(2, 4) + 100);
// // → 102

// // When your program contains more than one statement, the statements are executed as though they were a story, from top to bottom.
// let theNumber = Number(prompt("Pick a number"));
// console.log(theNumber);
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// if (1 + 1 == 2) console.log("It's true");
// // → It's true

// let num = Number(prompt("Pick a number"));

// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }

// let numWhile = Number(prompt("Digite um número"));
// let count = 0;
// while (count < numWhile) {
//   count++;
//   if (count % 2 === 0) {
//     console.log(`Even numbers are: ${count}`);
//   }
// }

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);
// // → 1024

// let yourName;
// do {
//   yourName = prompt("Who are you");
// } while (!yourName);
// console.log("Hello " + yourName);

// if (false != true) {
//   console.log("That makes sense.");
//   if (1 < 2) {
//     console.log("No surprise there.");
//   }
// }

// for (let number = 0; number <= 12; number = number + 2) {
//   console.log(number);
// }

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   console.log((result = result * 2));
// }

// Its use is demonstrated in the following
//program, which finds the first number that is both greater than or
// equal to 20 and divisible by 7:

// for (let current = 15; ; current = current + 1) {
//   if (current % 7 === 0) {
//     console.log(current);
//     break;
//   }
// }
// // → 21

let weather = "ola";

switch (weather) {
  case "rain":
    console.log("Don't forget umbrella");
    break;
  case "sunny":
    console.log("Put a light dresses");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknow weather type!");
    break;
}
