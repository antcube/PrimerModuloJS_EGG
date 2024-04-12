
const numero1 = Number(prompt('Ingrese primer número'));

const numero2 = Number(prompt('Ingrese segundo número'));

// typeof
console.log(typeof numero1);
console.log(typeof numero2);

// DOM
const pSuma = document.querySelector('#suma');
pSuma.textContent = 'Suma = ' + (numero1 + numero2);

const pResta = document.querySelector('#resta');
pResta.textContent = 'Resta = ' + (numero1 - numero2);

const pMulti = document.querySelector('#multiplicacion');
pMulti.textContent = 'Multiplicacion = ' + (numero1 * numero2);

const pDivi = document.querySelector('#division');
pDivi.textContent = 'Division = ' + (numero1 / numero2);