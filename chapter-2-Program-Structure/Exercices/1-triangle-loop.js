/*
🟢 Exercise 1 — Triangle Loop (Thinking Like the Book)
🎯 Goal

Practice:

for loops

using the loop variable as state

avoiding unnecessary helper variables

🧩 Challenge

Write a program that prints the following pattern:

*
**
***
****
*****

📌 Rules

❌ Do NOT use extra variables outside the loop

❌ Do NOT use while

✅ Use a for loop

✅ Let the loop variable itself hold the growing string
*/

for (let i = "*"; i.length <= 5; i = i + "*") {
  console.log(i);
}
