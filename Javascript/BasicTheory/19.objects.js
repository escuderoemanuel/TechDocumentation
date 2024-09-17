// Objetos

//* En JS los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
//* Es una colección de datos relacionados como una entidad.
//* Se componente de un listaod de clave:valor (propiedad:valor)

// Ejemplo:

let name = 'Homer';
let age = 39;
let address = 'Av. Siempreviva 742';
//* Como estos valores están relacionados, entonces usamos un objeto literal
const persona1 = {
  name: 'Homer',
  age: 39,
  address: 'Av. Siempreviva 742',
}

// Se puede acceder a sus valores a través de sus propiedades
persona1.name;
persona1['address'];
persona1.age = 40; // Reescribe la propiedad con un nuevo valor

console.log(persona1);

//! Cuidado
//* Si asignamos en el scope global y los tomamos luego como propiedades, van a poder ser modificados, porque solamente estaría tomando los valores y asignándolos a las propiedades (que son variables en el scope del objeto)

const name2 = 'Abril';
const age2 = 34;

const persona2 = {
  name2, age2
}

persona2.age2 = 37;

console.log(persona2); // { name2: 'Abril', age2: 37 }