// let totalApagar = 0;

// const n = Number(prompt('Ingrese la cantidad'));

// for (let index = 1; index <= n; index++) {
//     const nombre = prompt("¿Qué producto desea llevar?");
//     const cantidad = Number(prompt("¿Cuántas unidades?"));
//     const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//     const subtotal = cantidad * precio;
//     totalApagar = totalApagar + subtotal;

//     console.log('Pagara por ' + cantidad + ' ' + nombre + ': S/.' + subtotal);
// }

// console.log('Pagar en total: S/.', totalApagar);


// const arreglo = [10, 20, 30, 40];

// // for (let i = 0; i < arreglo.length; i++) {
// //     console.log(arreglo[i]);
// // }

// arreglo.forEach( function(i) {
//     console.log(i);
// })



// Ahora con funciones, asignando arrow function
const comprar = ()=> {
    let totalApagar = 0

    for (let index = 1; index <= 3; index++)  {
        const nombre =prompt("¿Qué producto desea llevar?");
        const cantidad = Number(prompt("¿Cuántas unidades?"));
        const precio = Number(prompt("¿Cuánto sale cada unidad?"));
        const subtotal = cantidad * precio;
        totalApagar = totalApagar + subtotal;

        console.log('Pagará por ' + cantidad + ' ' + nombre + '(s): S/.' + subtotal);

        if(index === 3){
            console.log('Pagar en total: S/.', totalApagar);
        }
    }
    // console.log(totalApagar);
    // return totalApagar;
}

// const total1 = comprar();
// const total2 = comprar();
// const total3 = comprar();
// const total = total1 + total2 + total3;
    
// const totalT = comprar() + comprar() + comprar();
comprar();