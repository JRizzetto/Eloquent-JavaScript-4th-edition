/*
Exercício 3 — makeLimiter(max)

makeLimiter(max)

Ela deve:
Retornar uma função
A função recebe um número
Acumula esse número em uma soma interna
Mas nunca pode ultrapassar max


Exemplo esperado:

const limit10 = makeLimiter(10);

limit10(3)  → 3
limit10(4)  → 7
limit10(10) → 10
limit10(1)  → 10

Regras:
- Não use variável global
- Estado deve ser privado
- Não pode resetar quando passar do limite
- Apenas “travar” no máximo

*/

function makeLimiter(max) {
  let maxValue = max;
  let counter = 0;

  return function (number) {
    counter += number;
    if (counter >= maxValue) counter = maxValue;
    return counter;
  };
}

const limit10 = makeLimiter(10);
console.log(limit10(3));
console.log(limit10(4));
console.log(limit10(10));
console.log(limit10(1));
