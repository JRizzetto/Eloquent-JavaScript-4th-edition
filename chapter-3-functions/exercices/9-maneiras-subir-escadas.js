/*
🧪 Exercício 2 — Quantas maneiras de subir escadas?
Imagine que você pode subir uma escada de:
- 1 degrau por vez
- ou 2 degraus por vez

Crie uma função:
countWays(n)

Ela deve retornar:
Quantas maneiras diferentes existem para subir uma escada com n degraus?

Exemplos esperados:

countWays(1) → 1
countWays(2) → 2
countWays(3) → 3
countWays(4) → 5
countWays(5) → 8
*/

function countWays(n) {
  if (n <= 2) return n;

  console.log(`-> ${n}`);

  return countWays(n - 1) + countWays(n - 2);
}

console.log(countWays(10));

// -------------------------------------------------------------------------------------

// function countWays(number) {
//   if (number < 0) return undefined;
//   if (number <= 1) return number;

//   let prev = 0;
//   let current = 1;

//   for (let i = 2; i <= number; i++) {
//     const next = prev;
//     current = current + prev;
//     prev = current - next;
//   }

//   return current;
// }
