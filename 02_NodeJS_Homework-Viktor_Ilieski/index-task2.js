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


// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
const studentsGradeA = studenti.filter((studentiProsek) => studentiProsek.prosek >= 9 && studentiProsek.grad !== "Skopje")
    .sort((a, b) => {
        if (a.prosek > b.prosek) return 1
        else return -1

        return a - b
    })
console.log(studentsGradeA);
