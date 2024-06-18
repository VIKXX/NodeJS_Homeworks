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

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
const studentsFiveCaracters = studenti.filter((fiveCaractersbyName) => { return fiveCaractersbyName.ime.length === 5 })
    .slice(0, 3)
    .sort((a, b) => {
        if (a.prosek > b.prosek) return -1
        else return 1

        return a - b
    })

console.log(studentsFiveCaracters);



const studentsFiveCaracters1 = studenti.filter((fiveCaractersbyName) => { return fiveCaractersbyName.ime.length === 5 })
    .splice(0, 3)
    .sort((a, b) => {
        if (a.prosek > b.prosek) return -1
        else return 1

        return a - b
    })

console.log(studentsFiveCaracters1);