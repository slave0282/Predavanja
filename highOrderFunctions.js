//HIGHER ORDER FUNCTIONS
let students = [
    { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
    { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
    { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
    { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
    { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
    { firstName: "Eric", lastName: "I", grade: 1, age: 17 },
];
let students2 = [
    {
        firstName: "Bob",
        lastName: "H",
        grades: [
            { subject: "Math", grade: 2 },
            { subject: "Science", grade: 3 },
        ],
        age: 19,
    },
    {
        firstName: "Mel",
        lastName: "B",
        grades: [
            { subject: "Math", grade: 3 },
            { subject: "Science", grade: 5 },
        ],
        age: 33,
    },
];

// //without higher order functions
// //  for(let i = 0; i < students.length; i++){
// //     console.log(`${students[i].firstName} ${students[i].lastName}`);
// //  }

// //with higher order functions
// //  function logFullName(student){
// //     console.log(`${student.firstName} ${student.lastName}`);
// //  }

// //  students.forEach(logFullName);

// //with higher order functions but with an anonymous function

// //  students.forEach(function(student){
// //     console.log(`${student.firstName} ${student.lastName}`);
// //  })
// //with higher order functions but with an arrow function
// //  students.forEach(student => {
// //     console.log(`${student.firstName} ${student.lastName}`);
// //  })

// //Complex use #1
// students2.forEach((student) =>
//     student.grades
//         .filter((grade) => grade.grade === 5)
//         .forEach((grade => console.log(`${grade.subject}: ${grade.grade}`))
//         ));

// //Filter

// let above18 = [];
// for (let student of students) {
//     if (student.age >= 18) {
//         above18.push(student);
//     }
// }
// console.log(above18);

// let studentsAbove18 = students
//     .filter((s) => s.age >= 18);

// console.log(studentsAbove18);

// let studentsAbove18WithGradeHigherOrEqualTo4 = studentsAbove18
//     .filter((s) => s.grade >= 4);
// console.log(studentsAbove18WithGradeHigherOrEqualTo4);

// let studentsAbove18WithGrade5Short = students
//     .filter((s) => s.age >= 18)
//     .filter((s) => s.grade === 5);

// let studentsAbove18WithGrade5EvenShorter = students.filter(
//     (s) => s.age >= 18 && s.grade === 5
// )


// //Map
// let studentFirstNames = students.map((s) => s.firstName);

// console.log(studentFirstNames);

// let names = students.map(s=>{
//     return{
//         name: `${s.firstName} ${s.lastName}`,
//         grade: s.grade,
//     };
// });
// console.log(names);

// let namesSimplified = students.map((s => `${s.firstName} ${s.lastName}`));
// console.log(namesSimplified);

let studentsWithEInName = students.filter((s) => s.firstName.toLowerCase().includes('e'));
console.log(studentsWithEInName);

//Reducde

let sumOfAllGrades = students
    .map((s) => s.grade)
    .reduce((sum, grade) => (sum += grade), 0);

console.log(sumOfAllGrades);

let allNamesString = students
    .map((s) => s.firstName)
    .reduce((bigString, name) => (bigString += `${name}`), "Names:");
console.log(allNamesString);

let allGradesExceptLowest = students
    .filter((s) => s.grade > 1)
    .map((s) => s.grade)
    .reduce((sum, grade) => (sum += grade), 0);
console.log(allGradesExceptLowest);

//Spread and sort

let allGrades = students.map((s) => s.grade);
console.log(allGrades);

let sortedGrades = allGrades.sort((a, b) => a - b);
console.log(sortedGrades);

let studentNameLength = students.filter((s) => s.firstName.length);
let sortedNames = studentNameLength.sort((a, b) => b.firstName.length - a.firstName.length);


console.log(sortedNames);
