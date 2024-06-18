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

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име(растечки).

const findStudentOnA = studenti.filter((studentOnA) => { return studentOnA.ime.endsWith('a') })
    .filter((studentiSkopje) => studentiSkopje.grad === "Skopje" && studentiSkopje.prosek >= 7)
console.log(findStudentOnA);

const sortIncByNme = studenti.sort((a, b) => {
    if (a.prosek > b.prosek) return -1
    else return 1

    return a - b
})
console.log(sortIncByNme);

