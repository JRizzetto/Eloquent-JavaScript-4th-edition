/*
1. Os 10 primeiros números naturais

Escreva um programa em C++ para encontrar os 10 primeiros números naturais.

Exemplo de saída:
Os números naturais são:
1 2 3 4 5 6 7 8 9 10
*/

let result = 0;
let nTermos = 7;

for (let i = 1; i <= nTermos; i++) {
  result += i;

  console.log("Digite o número de termos: " + nTermos);
  console.log("Os números naturais são: " + i);
}

console.log(result);
