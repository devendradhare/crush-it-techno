// 2 Factorial Calculation:
// Write a program to calculate the factorial of a given non-negative integer n using a for loop.
// Input: A non-negative integer n.

let number = 5;
let factorial = 1;
for (let i = 5; i > 0; i--) {
  factorial *= i;
}

console.log("factorial of ", number, " is ", factorial);
