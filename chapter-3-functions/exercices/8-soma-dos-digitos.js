/*
🧪 Exercício Forte de Recursão
🎯 Problema — Soma dos dígitos

Crie uma função:
sumDigits(n)

Ela deve:
Receber um número inteiro positivo
Retornar a soma de todos os seus dígitos
Usando recursão (sem loop)

📌 Exemplos esperados:
sumDigits(5) → 5
sumDigits(42) → 6
sumDigits(1234) → 10
sumDigits(999) → 27
*/

function sumDigits(n) {
  let count = 0;

  if (n < 1) {
    return 0;
  }

  count += n % 10;

  return count + sumDigits(Math.floor(n / 10));
}

// console.log(sumDigits(5));
// console.log(sumDigits(42));
// console.log(sumDigits(1234));
console.log(sumDigits(1000));
