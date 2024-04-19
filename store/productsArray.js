class Product {
    // Constructor de la clase Product
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        // Atributos
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
        this.colors = colors;
        this.description = description;
    }

    get getSupplier() {
        return this._supplier;
    }

    set setSupplier(newName) {
        this._supplier = newName;
    }

    // Metodos
    sellUnits(units) {
        if(units <= this.stock) {
            this.stock = this.stock - units;
        } else {
            document.write(`Stock insuficiente!!!, solo queda ${this.stock} en stock disponible`);
        }
	}
}

// Instancias de la clase
const prod1 = new Product(1, 'Escritorio', 500, 5, ['url.imagen', 'url.imagen2', 'url.imagen3'], false, 'Proveedor1', 'marron', 'Escritorio de madera');

const prod2 = new Product(2, 'Celular', 900, 10, ['url.imagen', 'url.imagen2', 'url.imagen3'], true, 'Proveedor2', 'gold', 'Celular de ultima generacion');

const prod3 = new Product(3, 'TV', 1900, 10, ['url.imagen', 'url.imagen2'], true, 'Proveedor3', 'negro', 'TV 4k');

const prod4 = new Product(4, 'Mueble', 1600, 12, ['url.imagen', 'url.imagen2'], false, 'Proveedor4', 'marron', 'Mueble de 2 puertas');


// Array de productos
const products = [prod1, prod2, prod3, prod4];
// console.log(products.length);
// console.log(products);
// console.log(products[1]);
// console.log(products[products.length - 1]);


// Asignamos 2 nuevas instancias de la clase Product
const prod5 = new Product(5, 'Silla', 200, 10, ['url.imagen', 'url.imagen2'], false, 'Proveedor5', 'beige', 'Silla con ruedas');

const prod6 = new Product(6, 'Mesa', 300, 15, ['url.imagen', 'url.imagen2'], true, 'Proveedor6', 'marron', 'Mesa de madera y vidrio');

// unsift() agrega un elemento al inicio del array
products.unshift(prod5);
// push() agrega un elemento al final del array
products.push(prod6);

// products.forEach( function(e) {
//     console.log(`El producto ${e.title} tiene un precio de ${e.price} y hay ${e.stock} unidades en stock`);
// });

// shift() elimina el primer elemento del array
// products.shift();
// pop() elimina el ultimo elemento del array
// products.pop();
console.log(products);


// Array
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // for(let i = 0; i < numeros.length; i++) {
// //     console.log(numeros[i]);
// // }

// numeros.forEach( function(e) {
//     console.log(e);
// });
