// 2 If-Else Statement Question:
// Write a program to determine whether a given year is a leap year or not.
// If the year is divisible by 4, it is a leap year.
// However, if it is divisible by 100,
// it is not a leap year unless it is also divisible by 400.
// Output "Leap Year" if it's a leap year, and "Not a Leap Year" otherwise.
// Input: A year (integer).

let year = 400;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not a Leap Year");
}
