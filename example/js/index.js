/* seleccionar una etiqueta del HTML */
// DOM: Document Object Model


// const selector = document.getElementById("mensaje");
const selector = document.querySelector('#mensaje');

/* escribir dentro de esa etiqueta con JS */
// selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";
selector.textContent = 'Conexión exitosa entre HTML y JS';
selector.classList.add('text-blue', 'text-center', 'm-3');



// Datos de entrada y salida
// const entrada = prompt("¿Qué producto desea comprar?");
// console.log(entrada);
// alert(entrada);
const nombre = window.prompt('Cual es tu nombre ?');

const saludo = document.querySelector('#bienvenida');
saludo.textContent = 'Bievenido: ' + nombre;
// saludo.textContent = `Bievenido: ${nombre}`;