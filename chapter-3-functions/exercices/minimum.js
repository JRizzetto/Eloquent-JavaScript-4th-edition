/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can write a function like that ourselves now. 
Define the function min that takes two arguments and returns their minimum.
*/

function minimum(a, b) {
  if (a === b) {
    return `Os valores não pode ser iguais!`;
  }
  return a < b ? a : b;
}

console.log(minimum(100, 10));
