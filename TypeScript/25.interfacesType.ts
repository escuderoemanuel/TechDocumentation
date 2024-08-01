// Interfaces 
// Molde del contrato/forma que tiene que cumplir el objeto
// Pero no dice explicitamente lo que contiene

// type Hero = {
//   id: string;
//   name: string;
//   age: number;
// }

interface Hero {
  id: string;
  name: string;
  age: number;
  saludar: () => void; // void porque no tiene ningún return
}

const hero: Hero = {
  id: '1',
  name: 'Spiderman',
  age: 30,
  saludar: () => {
    console.log('Hola');
  }
}

// Las interfaces se pueden anidar
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  total: number;
}

interface Cart {
  products: Product[];
  total: number;
}

// Example
const cart: Cart = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      description: 'Description 1',
      quantity: 1,
      total: 10
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      description: 'Description 2',
      quantity: 2,
      total: 40
    }
  ],
  total: 50
}

// Las interfaces se pueden extender
interface Shoe extends Product {
  size: number;
}

// Example
const shoe: Shoe = {
  id: 1,
  name: 'Shoe 1',
  price: 50,
  description: 'Description 1',
  quantity: 1,
  total: 50,
  size: 10
}

// Functions en Interfaces

// Option #1 (Opción más clara)
interface CartMethods {
  add: (product: Product) => void;
  remove: (productId: number) => void;
  clear: () => void;
}

// Option #2
// interface CartMethods {
//   add(product: Product): Cart;
//   remove(productId: number): Cart;
//   clear(): Cart;
// }

//! IMPORTANTE: 
//! Las interfaces a diferencia de los tipos (type) pueden estar duplicadas y no va a dar error, por lo que es más sencillo cometer errores.

interface CartMethods {
  add: (product: Product) => void;
  removeAll: () => void;

}
//! Al compilar las interfaces desaparecen en el código final, por lo que no es tan eficiente como los tipos.

//? Cuando se justificaría utilizar interfaces?
// Cuando necesitas definir un objeto
// Cuando necesitas definir un método de un objeto
// Cuando necesitas definir la forma de una clase
