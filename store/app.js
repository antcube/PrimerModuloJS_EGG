let totalApagar = 0;

const n = Number(prompt('Ingrese la cantidad'));

for (let index = 1; index <= n; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;

    console.log('Pagara por ' + cantidad + ' ' + nombre + ': S/.' + subtotal);
}

console.log('Pagar en total: S/.', totalApagar);


// const arreglo = [10, 20, 30, 40];

// // for (let i = 0; i < arreglo.length; i++) {
// //     console.log(arreglo[i]);
// // }

// arreglo.forEach( function(i) {
//     console.log(i);
// })