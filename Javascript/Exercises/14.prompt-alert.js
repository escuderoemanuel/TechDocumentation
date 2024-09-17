// Ejercicio
// Ingresar mediante prompt 2 valores
// Determinar cuál de ellos es mayor e informarlo con un alert

// OPCION A
let a;
let b;

do {
  a = parseInt(window.prompt('Ingrese un valor numérico entero para "A":'));
  console.log('A', a);
} while (isNaN(a))

do {
  b = parseInt(window.prompt('Ingrese un valor numérico entero para "B":'));
  console.log('B', b);
} while (isNaN(b));

if (a > b) {
  alert(`'A: ${a}' es mayor que 'B: ${b}'`)
} else if (a < b) {
  alert(`'B: ${b}' es mayor que 'A: ${a}'`)
} else if (a === b) {
  alert(`'A: ${a}' y 'B: ${b}' son iguales`)
} else {
  alert('Alguno de los valores ingresados es incorrecto')
}

// OPCION B
function obtenerNumero(promptMessage) {
  let num;
  do {
    num = parseInt(window.prompt(promptMessage));
    // console.log(promptMessage, num);
  } while (isNaN(num));
  return num;
}

let x = obtenerNumero('Ingrese un valor numérico entero para "X":');
let z = obtenerNumero('Ingrese un valor numérico entero para "Z":');

if (x > z) {
  alert(`'X: ${x}' es mayor que 'Z: ${z}'`);
} else if (x < z) {
  alert(`'Z: ${z}' es mayor que 'X: ${x}'`);
} else {
  alert(`'X: ${x}' y 'Z: ${z}' son iguales`);
}
