/*
Desafio 2 — Counter configurável
Crie:
createCounter(step)

Agora ele deve:
Receber um número inicial opcional (ex: 10)
Receber um passo opcional (ex: 2)
Incrementar com base nesse passo

Exemplo esperado:
const c = createCounter(10, 2);
c(); → 12
c(); → 14
c(); → 16

Exemplo esperado:
const c = createCounter(10, 2);
c(); → 12
c(); → 14
c(); → 16

Se não passar nada:
const c2 = createCounter();
c2(); → 1
c2(); → 2
*/

function createCounter(number, step) {
  let counter = number;
  let stepSize = step;

  if (counter === undefined) counter = 1;
  if (stepSize === undefined) stepSize = 1;

  return function () {
    counter += stepSize;
    return counter;
  };
}

const result = createCounter(10, 2);
console.log(result());
console.log(result());

const result2 = createCounter();
console.log(result2());
console.log(result2());
console.log(result2());
