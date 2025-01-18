{
  /*
    You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
  */

  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  const calculateAverageGrade = (student: Student): number => {
    const totalGrades : number = student.grades.reduce((a, c) => a + c, 0);
    const average : number = totalGrades / student.grades.length;
    return average;
  };

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  
  console.log(averageGradeForBob)
}
