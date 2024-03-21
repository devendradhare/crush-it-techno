// 9 If-Else with String Processing Question:
// Write a program that takes a string as input and determines whether it is a palindrome or not.
// Output "Palindrome" if it's a palindrome, and "Not a Palindrome" otherwise.
// Input: A string.

let str = "abcba";

console.log(str.split("").reverse().join(""));

if (str.split("").reverse().join("") == str) console.log("Palindrome");
else console.log("not a palindrome");
