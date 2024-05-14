import { perimetro } from './perimeter.js';
import { area } from './area.js';
import { rectangulos } from './rectangleData.js';

const showInfo = () => {
    rectangulos.forEach( rectangulo => {
        const { ancho, altura} = rectangulo;

        console.log(`Perimetro: ${perimetro(ancho, altura)}`);
        console.log(`Area: ${area(ancho, altura)}`);
        console.log('----------------');
    })
} 

showInfo();