// 6 Pyramid Pattern:
// Write a program to print the following pyramid pattern using nested for loops:

// markdown
//     *
//    * *
//   * * *
//  * * * *
// Input: None.

let lineNumber = 40;

for (let i = 0; i < lineNumber; i++) {
  let str = "";
  for (let k = lineNumber - i; k >0; k--) {
    str = str + " ";
  }
  for (let j = 0; j <= i; j++) {
    str = str + "* ";
  }
  console.log(str);
}
