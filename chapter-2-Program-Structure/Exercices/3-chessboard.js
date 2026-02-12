/*
Exercise 3 — Chessboard (Book Thinking)
Now let’s do the chessboard, same mindset:
express a rule
build the result
print at the end

Goal
Practice:
nested loops
simple math rules
building strings
avoiding hardcoded patterns

Challenge
Write a program that creates a string representing an 8×8 chessboard.
Rules:
- Each position is either " " (space) or "#"
- Lines are separated by \n
- The pattern must alternate like a real chessboard
*/

let control = "";

for (let x = 1; x <= 8; x++) {
  for (let y = 1; y <= 8; y++) {
    if (x % 2 !== 0) {
      if (y % 2 === 0) control += "#";
      if (y % 2 !== 0) control += " ";
    } else {
      if (y % 2 !== 0) control += "#";
      if (y % 2 === 0) control += " ";
    }
  }
  control += "\n";
}

console.log(control);
