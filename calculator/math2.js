const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const multiplicacion = (a, b) => a * b;

const division = (a, b) => a / b;

const squareRoot = (a) => Math.sqrt(a);

const cubeRoot = (a) => Math.cbrt(a);

const power = (a, b) => Math.pow(a, b);

// window.addEventListener('load', () => {

//     const botonSuma = document.getElementById('suma');

//     botonSuma.addEventListener('click', () => {
//         const num1 = parseFloat(document.getElementById('num1').value);
//         const num2 = parseFloat(document.getElementById('num2').value);
//         const resultado = suma(num1, num2);
//         document.getElementById('resultado').textContent = resultado;
//     });
// })


const display= document.querySelector("#display");
const buttons= document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        e.preventDefault();

        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id == "de"){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
    })
})