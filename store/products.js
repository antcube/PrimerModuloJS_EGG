// const producto1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2,
// };

// producto1.id = "id123";
// producto1['foto'] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

// console.log(producto1);

class Product {
    // Constructor de la clase Product
    constructor(id, title, price, stock, images, onsale, supplier) {
        // Atributos
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
        // Para tener un atributo privado usamos '#'
        // this.#supplier = supplier;
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
// Dentro de los parentesis van los parametros
const prod1 = new Product();

const prod2 = new Product(1, 'Celular', 900);

const prod3 = new Product(2, 'TV', 1900, 10, 'url.imagen', true, 'Empresa1');

// console.log(prod2.title);
console.log(prod3.onsale); // true

console.log(prod3.getSupplier);  // Empresa1
prod3.setSupplier = 'Empresa2';

console.log(prod3.getSupplier);  // Empresa2

prod3.sellUnits(8);
console.log(prod3.stock); // 2

const prod4 = new Product(3, 'Mueble', 1600, 12, 'url.imagen', false, 'Proveedor10');
prod4.sellUnits(10); // 2
prod4.sellUnits(5);  // Stock insuficiente!!!, solo queda 2 en stock disponible
console.log(prod4);
