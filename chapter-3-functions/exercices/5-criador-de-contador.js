/*
🧪 Exercício 1 — Criador de Contador
Crie uma função chamada:
createCounter
Ela deve:
- Não receber nada
- Retornar uma função

A função retornada deve:
- Aumentar um contador interno
- Retornar o valor atualizado a cada chamada
*/

function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const counter = createCounter();
console.log("Counter -> " + counter());
console.log("Counter -> " + counter());

const counter2 = createCounter();
console.log("Counter2 -> " + counter2());
console.log("Counter2 -> " + counter2());

console.log("Counter -> " + counter());
