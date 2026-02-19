// Chapter 3 - Functions
// Defining a function
// const square = function (x) {
//   return x * x;
// };
// console.log(square(12));

// const makeNoise = function () {
//   console.log("Pling!");
// };
// makeNoise();
// // → Pling!

// const roundTo = function (n, step) {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTo(23, 10));
// // → 20

//Bindings and scopes
// let x = 10; // global
// if (true) {
//   let y = 20; // local to block
//   var z = 30; // also global
// }
// console.log(z);

// const halve = function (n) {
//   return n / 2;
// };
// let n = 10;
// console.log(halve(100));
// console.log(n);

// Nested scope
// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   62;
//   ingredient(0.5, "teaspoon", "cumin");
// };
// hummus(1);

// Functions as values
// let launchMissiles = function () {
//   missleSystem.launch("now");
// };
// if (safeMode) {
//   launchMissiles = function () {
//     /* do nothing */
//   };
// }

// Declaration notation
// function square(x) {
//   return x * x;
// } // This is a function declaration

// console.log("The future says:", future());
// function future() {
//   return "You'll never have flying cars";
// }

// Arrow functions
// const roundTo = (n, step) => {
//   let remainder = n % step;
//   console.log(remainder);
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTo(10, 5));

// const square1 = (x) => {
//   return x * x;
// };
// const square2 = (x) => x * x;

// const horn = () => {
//   console.log("Toot");
// };

// The call stack
// function greet(who) {
//   console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye");

// function chicken() {
//   return egg();
// }

// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first."); // Maximum call stack size exceeded

// Optional Arguments
// function square(x) {
//   return x * x;
// }
// console.log(square(4, true, "hedgehog"));

// function minus(a, b) {
//   if (b === undefined) return -a;
//   else return a - b;
// }
// console.log(minus(10));
// console.log(minus(10, 5));

// function roundTo(n, step = 1) {
//   let remainder = n % step;
//   console.log(remainder);
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// }
// console.log(roundTo(4.5));
// console.log(roundTo(4.5, 2));

// console.log("C", "O", 2);
// // → C O 2

// Closure
// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//   return (number) => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));

// Recursion
// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }
// console.log(power(2, 3));

/*
Consider this puzzle: by starting from the number 1 and repeatedly either 
adding 5 or multiplying by 3, an infinite set of numbers can be
produced. How would you write a function that, given a number, tries
to find a sequence of such additions and multiplications that produces
that number? For example, the number 13 could be reached by first
multiplying by 3 and then adding 5 twice, whereas the number 15 cannot 
be reached at all.
*/

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ??
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, 1);
// }

// console.log(findSolution(13));

// Growing functions
function printFarminventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarminventory(7, 11);
