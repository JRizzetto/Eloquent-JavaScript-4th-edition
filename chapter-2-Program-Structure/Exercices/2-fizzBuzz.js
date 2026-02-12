/*
Exercise 2 — FizzBuzz (Book Thinking)
🎯 Goal
Practice:
control flow
conditionals
expressing rules clearly
separating decision from output

Challenge:
Write a program that prints numbers from 1 to 100, but:
- For numbers divisible by 3, print "Fizz"
- For numbers divisible by 5, print "Buzz"
- For numbers divisible by both 3 and 5, print "FizzBuzz"
- Otherwise, print the number itself

📌 Rules (important)
✅ Use a for loop
✅ Use one variable to represent the result of each iteration
❌ Do NOT nest conditionals unnecessarily
❌ Do NOT print inside every if
❌ Do NOT hardcode "FizzBuzz" first just to “make it work”
*/

for (let i = 1; i <= 100; i++) {
  let count = "";

  if (i % 3 === 0) count = "Fizz";
  if (i % 5 === 0) count = "Buzz";
  if (i % 3 === 0 && i % 5 === 0) count = "FizzBuzz";

  console.log(count || i);
}
