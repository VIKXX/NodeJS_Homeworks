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

// 4. Градови подредени по групна висина на просек.
const sortingStudentsByCity = studenti.sort((a, b) => {
    if (a.grad < b.grad) return -1
    else return 1
})
// console.log(sortingStudentsByCity);

const studentsByCity = sortingStudentsByCity.filter((studentsBitola) => studentsBitola.grad === "Bitola")
// console.log(studentsByCity);
const studentBitolaGrade = studentsByCity.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
const avverageBitola = studentBitolaGrade / studentsByCity.length
const numBitola = Math.floor(avverageBitola * 100) / 100 // Da se pushne ova vo nova niza
// console.log({ grad: "Bitola", Prosek: numBitola })




const studentsByCity1 = sortingStudentsByCity.filter((studentsKumanovo) => studentsKumanovo.grad === "Kumanovo")
// console.log(studentsByCity1);
const studentKumanovoGrade = studentsByCity1.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
const avverageKumanovo = studentKumanovoGrade / studentsByCity1.length
const numKumanovo = Math.floor(avverageKumanovo * 100) / 100 // Da se pushne ova vo nova niza
// console.log({ grad: "Kumanovo", Prosek: numKumanovo })





const studentsByCity2 = sortingStudentsByCity.filter((studentsOhrid) => studentsOhrid.grad === "Ohrid")
// console.log(studentsByCity2);
const studentOhridGrade = studentsByCity2.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
const avverageOhrid = studentOhridGrade / studentsByCity2.length
const numOhrid = Math.floor(avverageOhrid * 100) / 100 // Da se pushne ova vo nova niza
// console.log({ grad: "Ohrid", Prosek: numOhrid })





const studentsByCity3 = sortingStudentsByCity.filter((studentsSkopje) => studentsSkopje.grad === "Skopje")
// console.log(studentsByCity3);
const studentSkopjeGrade = studentsByCity3.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
const avverageSkopje = studentSkopjeGrade / studentsByCity3.length
const numSkopje = Math.floor(avverageSkopje * 100) / 100 // Da se pushne ova vo nova niza
// console.log({ grad: "Skopje", Prosek: numSkopje })





const studentsByCity4 = sortingStudentsByCity.filter((studentsStrumica) => studentsStrumica.grad === "Strumica")
// console.log(studentsByCity4);
const studentStrumicaGrade = studentsByCity4.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
const avverageStrumica = studentStrumicaGrade / studentsByCity4.length
const numStrumica = Math.floor(avverageStrumica * 100) / 100 // Da se pushne ova vo nova niza
// console.log({ grad: "Strumica", Prosek: numStrumica })





const studentsByCity5 = sortingStudentsByCity.filter((studentsTetovo) => studentsTetovo.grad === "Tetovo")
// console.log(studentsByCity5);
const studentTetovoGrade = studentsByCity5.reduce((acc, curr) => {
    acc = acc + curr.prosek
    return acc
}, 0)
const avverageTetovo = studentTetovoGrade / studentsByCity5.length
const numTetovo = Math.floor(avverageTetovo * 100) / 100 // Da se pushne ova vo nova niza
// console.log({ grad: "Tetovo", Prosek: numTetovo })




const array = [];
array.push({ grad: "Bitola", Prosek: numBitola },
    { grad: "Kumanovo", Prosek: numKumanovo },
    { grad: "Ohrid", Prosek: numOhrid },
    { grad: "Skopje", Prosek: numSkopje },
    { grad: "Strumica", Prosek: numStrumica },
    { grad: "Tetovo", Prosek: numTetovo });

const sortByHighProsek = array.sort((a, b) => {
    if (a.Prosek > b.Prosek) return -1;
    else return 1
})

console.log(array);