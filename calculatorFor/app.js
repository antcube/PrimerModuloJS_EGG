const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

// console.log(cantidad);

let suma = 0;

for(let i = 0; i < cantidad; i++) {
    const numero = Number(prompt("Ingrese el numero " + (i+1)));
    // suma = suma + numero;
    suma += numero;
}

console.log(suma);