/*
🟢 Pattern 2 — Right-Aligned Triangle
🎯 Goal

Practice:
- loops
- string building
- thinking in rules, not hardcoded output

🧩 Challenge
Print the following shape (height = 5):
    *
   **
  ***
 ****
*****

📌 Rules
✅ Use a variable height
✅ Use loops
✅ Build the line dynamically (no hardcoding spaces)
❌ Do NOT use arrays
❌ Do NOT print inside the loop body except once per line

💡 Hint (thinking only)
For each line:
- How many spaces?
- How many stars?
- How does that relate to the line number?
*/

// let board = "";
// let height = 5;

// for (let x = 1; x <= 5; x++) {
//   for (let y = 1; y <= 5; y++) {
//     if (y >= height) {
//       board += "*";
//     } else {
//       board += " ";
//     }
//   }
//   board += "\n";
//   height = height - 1;
// }

// console.log(board);

let board = "";
let size = 5;

for (let x = 5; x >= 1; x--) {
  for (let y = 1; y <= size; y++) {
    board += y >= x ? "*" : " ";
  }
  board += "\n";
}

console.log(board);
