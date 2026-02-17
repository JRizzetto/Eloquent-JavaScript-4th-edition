/*
Próximo: Pattern 4 — Diamond (Losango simples)
Quer fazer o losango com height = 5 (topo até o meio e depois descendo)?

Exemplo:

    *
   ***
  *****
   ***
    *

*/

let result = "";
let height = 5;

let half = Math.ceil(height / 2); // metade de cima (inclui o meio)

// Top half (1..half)
for (let x = 1; x <= half; x++) {
  for (let s = 1; s <= half - x; s++) result += " ";
  for (let st = 1; st <= 2 * x - 1; st++) result += "*";
  result += "\n";
}

// Bottom half (half-1..1)
for (let x = half - 1; x >= 1; x--) {
  for (let s = 1; s <= half - x; s++) result += " ";
  for (let st = 1; st <= 2 * x - 1; st++) result += "*";
  result += "\n";
}

console.log(result);
