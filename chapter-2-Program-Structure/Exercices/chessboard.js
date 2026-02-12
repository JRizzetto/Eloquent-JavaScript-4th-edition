/*
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard.
*/

let result = "";
// FORMA QUE RESPONDI
for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    console.log(" " + "#" + " " + "#" + " " + "#" + " " + "#");
  } else {
    console.log("#" + " " + "#" + " " + "#" + " " + "#");
  }
}

// FORMA QUE O LIVRO RESPONDEU
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    if ((x + y) % 2 === 0) {
      result += "#";
    } else {
      result += " ";
    }
  }
  result += "\n";
}

console.log(result);
