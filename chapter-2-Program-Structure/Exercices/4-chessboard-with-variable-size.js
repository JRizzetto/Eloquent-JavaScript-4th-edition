/*
Pattern 1 — Chessboard with Variable Size (Book Way)
🎯 Goal
Practice:
- nested for loops
- variables controlling structure
- expressing a general rule, not a fixed drawing

🧩 Challenge
Write a program that creates a chessboard of any size, based on a variable.
Example:
let size = 8;
Should produce an 8×8 board.
If you change to:
let size = 10;
It should automatically produce a 10×10 board.

📌 Rules (important)
✅ Use a variable called size
✅ Use two for loops
✅ Use one string variable to build the result
✅ Use the same rule you just discovered:

*/

// let char = "";
// let size = 10;

// for (let x = 1; x <= size; x++) {
//   for (let y = 1; y <= size; y++) {
//     if ((x + y) % 2 === 0) {
//       char += "#";
//     } else {
//       char += " ";
//     }
//   }
//   char += "\n";
// }

// console.log(char);

let char = "";
let size = 10;

for (let x = 1; x <= size; x++) {
  for (let y = 1; y <= size; y++) {
    char += (x + y) % 2 === 0 ? "#" : " ";
  }
  char += "\n";
}

console.log(char);
