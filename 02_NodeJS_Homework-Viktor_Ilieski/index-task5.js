const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.


const sortStudentOnA = studenti.sort((a, b) => {
    if (a.ime.endsWith("a") > b.ime.endsWith("a")) return -1
    else return 1
})
// console.log(sortStudentOnA);



const separatedStudentOnA = sortStudentOnA.slice(0, 5)
// console.log(separatedStudentOnA);
const separatedStudentNotA = sortStudentOnA.slice(5, 10)
// console.log(separatedStudentNotA);



const totalProsekOnA = separatedStudentOnA.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
// console.log(totalProsekOnA);
const totalProsekA = totalProsekOnA / separatedStudentOnA.length
const numProsekA = Math.floor(totalProsekA * 100) / 100
// console.log({ ProsekOnA: numProsekA });




const totalProsekNotOnA = separatedStudentNotA.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
// console.log(totalProsekNotOnA);
const totalProsekNotA = totalProsekNotOnA / separatedStudentNotA.length
const numProsekNotA = Math.floor(totalProsekNotA * 100) / 100
// console.log({ ProsekNotOnA: numProsekNotA });



const arrayProsek = []
arrayProsek.push({ "Prosek na imina na A": numProsekA },
    { "Prosek na imina Ostanati": numProsekNotA })
console.log(arrayProsek);