/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

It may be useful to know that you can find the length of a string by
writing .length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/

// FORMA QUE RESPONDI
let control = "#";
let value = "";

for (let i = 1; i <= 7; i++) {
  value += control;
  console.log(value);
}

// OUTRA FORMA QUE RESPONDI
while (value.length < 7) {
  value += control;
  console.log(value);
}

// FORMA QUE O LIVRO RESPONDEU
for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}
