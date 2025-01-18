"use strict";
{
    const calculateAverageGrade = (student) => {
        const totalGrades = student.grades.reduce((a, c) => a + c, 0);
        const average = totalGrades / student.grades.length;
        return average;
    };
    const student1 = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90],
    };
    const averageGradeForBob = calculateAverageGrade(student1);
    console.log(averageGradeForBob);
}
