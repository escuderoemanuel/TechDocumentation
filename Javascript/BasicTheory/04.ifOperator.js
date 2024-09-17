// Operadores Condicionales o Lógicos


// IF permite evaluar una o más condiciones y ejecutar código dependiendo del resultado de esa o esas condiciones.

let y = true;
let z = false;

if (y == true && z == true) { // Se podría simplificar -> if (y && z)
  console.log('Ambos son verdaderos');
} else if (y == true || z == true) { // Se podría simplificar -> if (y || z)
  console.log('Al menos uno es verdadero');
} else {
  console.log('Ambos son falsos');
}
