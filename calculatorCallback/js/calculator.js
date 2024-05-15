const solicitarNumeros = () => {
    const n1 = prompt('Ingrese el primer número');
    const n2 = prompt('Ingrese el segundo número');

    dividir(n1, n2, alert, mostrarResultado);
}

document.addEventListener('DOMContentLoaded', solicitarNumeros);

const dividir = (n1, n2, callback, show) => {
    if( isNaN(n1) || isNaN(n2) ) {
        callback('Ingrese un número válido');
        setTimeout(() => {
            solicitarNumeros();
        }, 2000);
        return;
    }

    n1 = Number(n1);
    n2 = Number(n2);

    if( n2 === 0 ) {
        callback('No se puede dividir por 0');
        setTimeout(() => {
            solicitarNumeros();
        }, 2000);
        return;
    }

    const resultado = n1 / n2;
    show(resultado);
}

const alert = (mensaje) => {
    const resultadoContainer = document.querySelector('#resultado');

    const p = document.createElement('P');
    p.classList.add('alert');
    p.textContent = mensaje;

    resultadoContainer.append(p);

    setTimeout(() => {
        p.remove();
    }, 2000);
}

const mostrarResultado = (resultado) => {
    const resultadoContainer = document.querySelector('#resultado');

    const p = document.createElement('P');
    p.classList.add('resultado');
    p.textContent = `El resultado de la división es: ${resultado}`;

    resultadoContainer.append(p);
}