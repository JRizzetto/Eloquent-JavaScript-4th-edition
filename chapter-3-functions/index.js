// Defining a function
// const square = function (x) {
//   return x * x;
// };
// console.log(square(12));

// const makeNoise = function () {
//   console.log("Pling!");
// };
// makeNoise();

// const roundTo = function (n, step) {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTo(23, 10));

// const halve = function (n) {
//   return n / 2;
// };

// let n = 10;
// console.log(halve(100));

// console.log(n);

//Nested scope
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
//   ingredient(0.5, "teaspoon", "cumin");
// };
// hummus(2);

// Functions as values
// Arrow functions
// const roundTo = (n, step) => {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTo(20, 5));

// The call stack
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
