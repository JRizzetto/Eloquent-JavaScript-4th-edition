// JavaScript provides a data type specifically for storing
// sequences of values. It is called an array and is written as a list of
// values between square brackets, separated by commas.

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

console.log(Math.max(11, 20));

let doh = "Doh";
console.log(doh.toUpperCase);
console.log(doh.toUpperCase());
console.log(doh.toLocaleLowerCase());

// Properties that contain functions are generally called methods of the
// value they belong to, as in “toUpperCase is a method of a string”.
// This example demonstrates two methods you can use to manipulate
// arrays.

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
sequence.pop();
console.log(sequence);

// Values of the type object are arbitrary collections of properties. One
// way to create an object is by using braces as an expression.

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
console.log(day1.events);
console.log(day1);

// When an object is written over multiple lines, indenting it as shown in this
// example helps with readability. Properties whose names aren’t valid
// binding names or valid numbers must be quoted:

// let descriptions = {
//   work: "Went to work",
//   "touched tree": "Touched a tree",
// };

// console.log(descriptions);

let a = {};
let b = a;

b.day = false;

console.log(a);

// The delete operator cuts off a tentacle from such an octopus. It is a
// unary operator that, when applied to an object property, will remove
// the named property from the object. This is not a common thing to
// do, but it is possible.

let anObject = { left: 1, right: 2 };
console.log(anObject);

delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);
console.log("right" in anObject);

// To find out what properties an object has, you can use the Object.
// keys function. Give the function an object and it will return an array
// of strings—the object’s property names:

console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
