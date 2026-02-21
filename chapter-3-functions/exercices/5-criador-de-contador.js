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
  return result();
}

function result() {
  let number = 0;
  number++;
  return number;
}

const counter = createCounter();
counter();
