// Example input
// const students = [
//   { name: "Alice", scores: [85, 92, 78] },
//   { name: "Bob", scores: [59, 63, 70] },
//   { name: "Charlie", scores: [100, 95, 98] },
//   { name: "David", scores: [45, 52, 60] },
//   { name: "Eve", scores: [75, 80, 82] }
// ];

// function calculateGrades(students)
// // grade A >= 90
// // grade B >= 80
// // grade C >= 70
// // grade D >= 60
// // grade F

// results.push({ name: student.name, grade: grade });

const students = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [59, 63, 70] },
    { name: "Charlie", scores: [100, 95, 98] },
    { name: "David", scores: [45, 52, 60] },
    { name: "Eve", scores: [75, 80, 82] }
];

function calculateGrades(students) {
    students.forEach(student => {
        let sum = 0
        let averageSum = 0

        student.scores.forEach(gradeScore => {
            sum = sum + gradeScore
        })
        averageSum = sum / 3
        // console.log(`Average Score: ${averageSum}`);


        let grade
        if (averageSum >= 90) {
            grade = "Grade A";
        } else if (averageSum < 90 && averageSum >= 80) {
            grade = "Grade B";
        } else if (averageSum < 80 && averageSum >= 70) {
            grade = "Grade C";
        } else if (averageSum < 70 && averageSum >= 60) {
            grade = "Grade D";
        } else {
            grade = "Grade E";
        }

        let results = new Array()
        results.push(`Name: ${student.name}`, `AverageSum: ${averageSum}`, `Grade: ${grade}`)
        console.log(results);
    })
}

calculateGrades(students)