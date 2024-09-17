// Arrays #2

let vector = new Array(3); // Para crear un array con cierta cantidad de posiciones vacías

console.log('vector:', vector)

vector[0] = 'Emanuel';
vector[1] = 'Karina';

console.log('vector:', vector)

vector[2] = 'Paloma';

console.log('vector:', vector)

// Crear Matriz vacía
let matriz = new Array(3)

console.log('matriz:', matriz)
// Por cada posición del array creado, creo un nuevo array con las posiciones necesarias
for (let i = 0; i < 3; i++) {
  matriz[i] = new Array(3)
}

console.log('matriz:', matriz)
