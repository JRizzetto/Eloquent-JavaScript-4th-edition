/*
🧪 Exercício — Transforme em Funções Puras
Vou te dar 3 funções.
Para cada uma você deve:
1️⃣ Dizer se é pura ou impura
2️⃣ Explicar por quê
3️⃣ Reescrever para torná-la pura (se for impura)

x

Função 1
let discount = 0.1;

function applyDiscount(price) {
  return price - price * discount;
}

Função 2
function greet(name) {
  console.log("Hello " + name);
}

Função 3
function multiply(a, b) {
  return a * b;
}

🎯 Regras

Não responda só “é pura” ou “é impura”
Explique tecnicamente
Se for impura, transforme em pura
Não use closure ainda
*/

//Função 1 é uma função impura por depender de uma variável global, apesar de sua entrada e saída sempre ser a mesma, ela depende de uma variável externa.
function applyDiscount(price) {
  let discount = 0.1;
  return price - price * discount;
}
console.log(applyDiscount(20));

// Função 2 a função 2 também é uma função impura por fazer console log
function greet(name) {
  return name;
}
const greetName = greet("Pedro");
console.log("Hello " + greetName);

// Função 3 essa é uma função pura por retornar sempre o mesmo valor e não depender de variáveis externas, assim como não modifica nada externo tbm.
function multiply(a, b) {
  return a * b;
}
