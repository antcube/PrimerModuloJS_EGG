const age = 25;

// Operador Ternario
// condicion ? se cumple : no se cumple;
// age >= 18 ? console.log('Mayor de edad') : console.log('Menor de edad');


// const frutas = ["manzana", "banana", "naranja"];

// const verduras = {verdura1: "lechuga", verdura2: "tomate", verdura3: "pepino"};

// Destructuring, se utiliza en arrays y objetos
// const [fruta1, fruta2, fruta3, fruta4] = frutas;
// const {verdura1, verdura2, verdura3} = verduras;

// consola
// console.log(fruta1); // manzana
// console.log(fruta2); // banana
// console.log(fruta3); // naranja
// console.log(fruta4); // undefined
// console.log('====================');
// console.log(verdura1); // lechuga
// console.log(verdura2); // tomate
// console.log(verdura3); // pepino
// console.log(verdura4); // error

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
];

carrito.forEach( function(item) {
    // Destructuring
    const {nombre, precio} = item;

    // console.log(nombre, precio);
})

const persona = {
    habilidades: ["HTML", "CSS", "JS", "React", "Node"],
    hobbies: ["Futbol", "Cine", "Viajar", "Videojuegos"]
};

const {habilidades, hobbies} = persona;

habilidades.forEach( habilidad => {
    // console.log(habilidad);
})

// console.log(habilidades);
// console.log(hobbies);


// Spread Operator
const frutas = ["manzana", "banana", "naranja"];
const verduras = ["lechuga", "tomate", "pepino"];

const compras = [...frutas, ...verduras, 'mandarina'];

compras.forEach( item => {
    // console.log(item);
})

const yo = {
    nombre: "Jose",
    edad: 25,
    estudio: "Ing. en Sistemas",
}

const yoCumpleanos = {
    ...yo,
    edad: 26,
    estudio: "Software Developer"
}

console.log(yoCumpleanos);

