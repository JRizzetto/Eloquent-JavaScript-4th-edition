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

let board = "";
let height = 5;

for (let x = 1; x <= height; x++) {
  for (let y = 1; y >= height - x; y++) {
    board += " ";
  }
}
