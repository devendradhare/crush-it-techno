// 4 Printing Patterns:
// Write a program to print the following pattern using nested for loops:

// markdown
// *
// * *
// * * *
// * * * *
// Input: None.

let rows = 5;

for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}
