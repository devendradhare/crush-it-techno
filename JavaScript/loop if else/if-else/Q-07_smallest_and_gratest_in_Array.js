// 7 If-Else with Array Processing Question:
// Write a program that takes an array of integers as input
// and finds the smallest and largest element in the array.
// Output both the smallest and largest elements.
// Input: An array of integers.

const numbers = [5, 8, 2, 9, 1];

let smallest = numbers[0];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Smallest:", smallest);
console.log("Largest:", largest);
