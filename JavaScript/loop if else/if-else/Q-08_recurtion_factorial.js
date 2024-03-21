// 8 If-Else with Recursion Question:
// Write a recursive function to find the factorial of a non-negative integer. Output the factorial of the given integer.
// Input: A non-negative integer for which the factorial needs to be calculated.

function factorial(num) {
  //   if (num === 0) return 1;
  return num === 0 ? 1 : num * factorial(num - 1);
}

const number = 5;
const result = factorial(number);
console.log("Factorial of", number, "is", result);
