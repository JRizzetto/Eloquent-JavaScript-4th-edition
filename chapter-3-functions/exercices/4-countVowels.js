/*
🧠 Desafio — Contar Vogais (com abstração)
🎯 Objetivo

Crie duas funções:

1️⃣ countChar
Você já tem essa base.
Ela deve:
Receber uma string
Receber um caractere
Retornar quantas vezes esse caractere aparece
(Use a sua versão atual como base.)

2️⃣ countVowels
Agora vem o desafio.
Essa função deve:
Receber uma string
Retornar quantas vogais existem nela
Considerar apenas vogais minúsculas: "a", "e", "i", "o", "u"

Exemplo esperado:
countVowels("banana") → 3
countVowels("javascript") → 3
countVowels("bbb") → 0

🧠 Regra importante
Você NÃO pode escrever toda a lógica de contagem de novo.
Você deve reutilizar countChar.
Isso vai treinar:
composição de funções
reaproveitamento
pensar em camadas
*/

function countChar(text, listChar) {
  let textInput = text.length - 1;
  let count = 0;

  while (0 <= textInput) {
    if (text[textInput] === listChar) {
      count++;
    }
    textInput--;
  }

  return count;
}

// console.log(countChar("maracuja", "a"));

function countVowels(text) {
  let vowels = "aeiou";
  let count = 0;
  let textStand = text.toLowerCase();

  for (let i = 0; i <= vowels.length - 1; i++) {
    count += countChar(textStand, vowels[i]);
  }

  return count;
}

console.log(countVowels("MARACUJA"));
