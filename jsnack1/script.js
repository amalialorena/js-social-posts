// // Crea un array composto da 10 automobili.
// // Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).


// let auto = [

// {
//     marca: "fiat",
//     modello: "panda",
//     alimentazione: "metano"
// },
// {
//     marca: "opel",
//     modello: "astra",
//     alimentazione: "diesel"
// },
// {
//     marca: "fiat",
//     modello: "tipo",
//     alimentazione: "diesel"
// },
// {
//     marca: "citroen",
//     modello: "c1",
//     alimentazione: "benzina"
// },
// {
//     marca: "pergeot",
//     modello: "108",
//     alimentazione: "gpl"
// },
// {
//     marca: "renault",
//     modello: "twingo",
//     alimentazione: "metano"
// },
// {
//     marca: "opel",
//     modello: "adam",
//     alimentazione: "elettrico"
// },
// {
//     marca: "alfa romeo",
//     modello: "mito",
//     alimentazione: "benzina"
// },
// {
//     marca: "bmw",
//     modello: "serie3",
//     alimentazione: "elettrico"
// },
// {
//     marca: "ford",
//     modello: "focus",
//     alimentazione: "diesel"
// },
// ];
// // Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// // Infine stampa separatamente i 3 array.

// //auto benzina
// const benzina = auto.filter((car) => {

//     if(car.alimentazione === "benzina") {
//         return true;
//     }
// });
//  console.log("array benzina:", benzina);

//  //auto diesel
//  const diesel = auto.filter((car) => {

//     if(car.alimentazione === "diesel") {
//         return true;
//     }
// });
//  console.log("array diesel:", diesel);

//  //le altre auto
//  const cars = auto.filter((car) => {

//     if(car.alimentazione === "diesel" || car.alimentazione === "benzina") {
//         return false;
//     }else{
//         return true;
//     }
// });
//  console.log("array cars:", cars);

//  Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

const persons = [ 
    {
        name: 'John',
        surname: 'Doe',
        age: 21,
    },
    {
        name: 'Alice',
        surname: 'Wonderland',
        age: 14,
    },
    {
        name: 'Harry',
        surname: 'Potter',
        age: 16,
    },
    {
        name: 'Albus',
        surname: 'Dumbledore',
        age: 100,
    },
    {
        name: 'Sirius',
        surname: 'Black',
        age: 30,
    },
    {
        name: 'Hermione',
        surname: 'Granger',
        age: 18,
    }
]
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// const driving = [];
// persons.forEach((person) => {
//     if(person.age < 18){
//         driving.push(`${person.name}, ${person.surname} can't drive`)
//     } else {
//         driving.push(`${person.name}, ${person.surname} can drive`)
//     }
// });
// console.log(driving);

const driving = persons.map((person) => {
    if(person.age < 18) {
        return `${person.name}, ${person.surname} can't drive`;
    } else {
        return `${person.name}, ${person.surname} can drive`
    }
})
console.log(driving);
console.log("persons:", persons)