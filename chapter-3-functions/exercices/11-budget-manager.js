/*
🧪 Exercício — Budget Manager
Crie uma função:
createBudget(limit)
Ela deve:
- Receber um limite máximo (opcional)
- Se não receber, o limite padrão é 100
- Retornar uma função

A função retornada deve:
- Receber um valor (gasto)
- Acumular esse gasto internamente
- Retornar quanto ainda resta do orçamento
- Nunca deixar o restante ficar negativo
- Se ultrapassar o limite, deve travar em 0

🎯 Exemplo esperado
- */

function createBudget(limit) {
  if (limit === undefined) {
    limit = 100;
  }

  let rest = limit;

  return function (value) {
    rest -= value;
    if (rest <= 0) {
      return 0;
    } else {
      return rest;
    }
  };
}

const budget = createBudget();
console.log(budget(10));
console.log(budget(15));
console.log(budget(30));
console.log(budget(5));

const defaultBudget = createBudget();
console.log(defaultBudget(20));
console.log(defaultBudget(50));
