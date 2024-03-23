// 5 Prime Number Check:
// Write a program to check whether a given integer is a prime number or not using a for loop.
// Input: An integer.

let number = 18;
let i;
for (i = 2; i < number; i++) {
  if (number % i == 0) {
    break;
  }
}
if (number == i) {
  console.log("prime number");
} else {
  console.log("not a prime number");
}
