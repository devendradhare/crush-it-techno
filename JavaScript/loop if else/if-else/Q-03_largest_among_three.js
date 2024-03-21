// 3 If-Else-If Ladder Question:
// Write a program that takes three integers as input
// and prints the largest among them.
// If all are equal, output any one of them.
// Input: Three integers.

let a = 1;
let b = 2;
let c = 3;

if (a > b) {
  if (a > c) {
    console.log(a);
  } else console.log(c);
} else {
  if (b > c) console.log(b);
  else console.log(c);
}
