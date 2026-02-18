/*
1. Os 10 primeiros números naturais

Escreva um programa em C++ para encontrar os 10 primeiros números naturais.

Exemplo de saída:
Os números naturais são:
1 2 3 4 5 6 7 8 9 10
*/

// let count = "";

// for (let i = 1; i <= 10; i++) {
//   count += " " + i;
// }
// console.log("The natural numbers are: " + count);

/*
2. Sum of First 10 Natural Numbers
Write a program in C++ to find the sum of the first 10 natural numbers.

Sample Output:
Find the first 10 natural numbers:
---------------------------------------
The natural numbers are:
1 2 3 4 5 6 7 8 9 10
The sum of first 10 natural numbers: 55
*/

// let count = "";
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   count += " " + i;
//   sum += i;
// }
// console.log("The natural numbers are: " + count);
// console.log("The sum of first 10 natural numbers: " + sum);

/*
3. Display n Terms of Natural Numbers and Their Sum

Write a program in C++ to display n terms of natural numbers and their sum.

Sample Output:
Input a number of terms: 7
The natural numbers upto 7th terms are:
1 2 3 4 5 6 7
The sum of the natural numbers is: 28
*/

// let input = 7;
// let naturalNumbers = "";
// let count = 0;

// for (let i = 1; i <= input; i++) {
//   naturalNumbers += " " + i;
//   count += i;
// }

// console.log(`Input a number of terms: ${input}`);
// console.log(`The natural numbers upto ${input}th terms are: ${naturalNumbers}`);
// console.log(`The sum of the natural numbers is: ${count}`);

// 4. Find Perfect Numbers Between 1 and 500

// let result = 0;
// let nTermos = 500;

// for (let i = 1; i <= nTermos; i++) {
//   result = 0;

//   for (x = 1; x < i; x++) {
//     if (i % x === 0) {
//       result += x;
//     }
//   }

//   if (result === i) {
//     console.log(i);
//   }
// }

/*
5. Check Whether a Number is Prime or Not

Write a program in C++ to check whether a number is prime or not.

Sample Output:
Input a number to check prime or not: 13
The entered number is a prime number.
*/

// let inputNumber = 6;
// let isPrime = true;

// for (let i = 2; i < inputNumber; i++) {
//   if (inputNumber % i === 0) {
//     keyControl = false;
//     break;
//   }
// }

// if (keyControl) {
//   console.log("The entered number is a prime number.");
// } else {
//   console.log("is NOT prime");
// }

/*
6. Find Prime Numbers Within a Range

Write a program in C++ to find a prime number within a range.

Input number for starting range: 1
Input number for ending range: 100
The prime numbers between 1 and 100 are:
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
The total number of prime numbers between 1 to 100 is: 25
*/

// let result = [];
// let rangeInput = 37;
// let isPrime = true;

// for (let i = 2; i <= rangeInput; i++) {
//   isPrime = true;

//   for (let x = 2; x * x <= i; x++) {
//     if (i % x === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     result.push(i);
//   }
// }

// console.log(result);

/*
7. Find the Factorial of a Number
Write a program in C++ to find the factorial of a number.

Sample output:
Input a number to find the factorial: 5
The factorial of the given number is: 120
*/

// let input = 5;
// let factorial = 1;

// for (let i = 1; i <= input; i++) {
//   factorial = factorial * i;
// }

// console.log(`Input a number to find the factorial: ${input}`);
// console.log(`The factorial of the given number is: ${factorial}`);

/*
8. Find the Last Prime Number Before a Given Number
Write a program in C++ to find the last prime number that occurs before the entered number.
Sample Output:

Input a number to find the last prime number occurs before the number: 50
47 is the last prime number before 50
*/

// let inputNumber = 50;
// let primeArray = [];
// let isPrime = true;

// for (let i = 2; i < inputNumber; i++) {
//   isPrime = true;

//   for (let x = 2; x * x <= i; x++) {
//     if (i % x === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) primeArray.push(i);
// }

// console.log(
//   `Input a number to find the last prime number occurs before the number: ${inputNumber}`,
// );

// console.log(
//   `${primeArray[primeArray.length - 1]} is the last prime number before ${inputNumber}`,
// );
