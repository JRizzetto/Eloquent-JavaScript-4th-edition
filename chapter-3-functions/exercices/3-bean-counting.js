/*
You can get the Nth character, or letter, from a string by writing [N]
after the string (for example, string[2]). The resulting value will be a
string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position
string.length - 1. In other words, a two-character string has length 2,
and its characters have positions 0 and 1.
Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B
characters there are in the string.
Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that
is to be counted (rather than counting only uppercase B characters).
Rewrite countBs to make use of this new function.

*/

function countBs(name) {
  let countB = countChar(name, "B");

  return countB;
}
let resultCountBs = countBs("BBB");
console.log(resultCountBs);

function countChar(string, character) {
  let length = string.length - 1;
  let count = 0;

  while (length >= 0) {
    if (string[length] === character) {
      count++;
    }
    length--;
  }

  return count;
}

let resultChar = countChar("Borboleta", "o");
console.log(resultChar);
