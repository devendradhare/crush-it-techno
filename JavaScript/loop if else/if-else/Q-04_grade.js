// 4 Nested If-Else Question:
// Write a program to determine the grade of a student based on their marks. 
// The criteria for grading are as follows:

// Grade A: Marks >= 90
// Grade B: Marks >= 80 and < 90
// Grade C: Marks >= 70 and < 80
// Grade D: Marks >= 60 and < 70
// Grade F: Marks < 60
// Output the corresponding grade based on the marks obtained.


function calculateGrade(marks) {
    if (marks >= 90) {
      return "A";
    } else if (marks >= 80) {
      return "B";
    } else if (marks >= 70) {
      return "C";
    } else if (marks >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  const studentMarks = 85;
  const grade = calculateGrade(studentMarks);
  console.log("Student's grade:", grade);