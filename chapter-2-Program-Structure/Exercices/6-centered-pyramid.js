/*
Pattern 3 — Centered Pyramid (Book Way)
🎯 Goal
Practice:
- nested loops
- building strings line by line
- turning a visual pattern into simple rules

🧩 Challenge
Given:
let height = 5;

    *
   ***
  *****
 *******
*********

📌 Rules
✅ Use a variable height
✅ Use loops (you can use 2 or 3 loops total)
✅ Build the output in a string (like result / pyramid)
✅ Print only once at the end (console.log(result))
❌ Do NOT hardcode spaces or stars
❌ Do NOT use arrays

💡 Hints (thinking, not code)
For each line i from 1 to height:
- Number of stars:
2 * i - 1
Number of leading spaces:
height - i
So each line is:
" ".repeat(height - i) + "*".repeat(2*i - 1)
But: since we’re staying in Chapter 2 mindset, try doing it with loops, not using .repeat() yet (optional).
If you already know .repeat(), you can use it, but I recommend loops for muscle memory.

*/

// let board = "";
// let height = 5;

// for (let x = 1; x <= 5; x++) {
//   for (let y = height; y >= 1; y--) {
//     if (y <= x) {
//       for (let z = 1; z <= 2 * x - 1; z++) {
//         board += "*";
//       }
//       y = 0;
//     } else {
//       board += " ";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

let board = "";
let height = 5;

for (let x = 1; x <= height; x++) {
  for (let y = 1; y <= height - x; y++) board += " ";

  for (let z = 1; z <= 2 * x - 1; z++) board += "*";

  board += "\n";
}

console.log(board);
