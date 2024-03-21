// 5 Multiple Conditions in If Statement Question:
// Write a program that takes three integers as
// input representing the lengths of the sides of a triangle.
// Determine and output whether the triangle is equilateral, isosceles, or scalene.
// Input: Three integers representing the lengths of the sides of a triangle.

const triangleType = (side1, side2, side3) => {
  if (
    side1 + side2 <= side3 ||
    side2 + side3 <= side1 ||
    side1 + side3 <= side2
  ) {
    return "Invalid triangle";
  }
  if (side1 == side2 && side2 == side3) {
    return "equilateral";
  } else if (side1 == side2 || side2 == side3 || side1 == side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

let side1 = 8;
let side2 = 8;
let side3 = 10;
const triangleType = triangleType(side1, side2, side3);
console.log("Triangle type:", triangleType);
