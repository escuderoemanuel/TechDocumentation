// Functions

// Bloque de código reutilizable que puede ejecutar una o más tareas específicas
// Permite encapsular una lógica particular, recibiendo datos (parámetros) y devolviendo un resultado
// Son elementos fundamentales para organizar y modularizar código


// Se declara la función (sin parámetros)
function sayHello() {
  console.log('Hello from the function...')
};
// Se ejecuta la función
sayHello();

// Función con parámetros
function add(num1, num2) {
  let result = num1 + num2;
  console.log('Added result:', result);
  return result;
}
add(3, 5);

function substraction(num1, num2) {
  return num1 - num2
};
let result = substraction(19, 3);
console.log('Substraction result:', result)

// las funciones pueden anidar ciclos o cualquier otra cosa

//* Function with switch
function calculator(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
      break; // Aquí no haría falta el break porque ya hay un return
    case '-':
      return a - b;
      break; // Aquí no haría falta el break porque ya hay un return
    case '/':
      return a / b;
      break; // Aquí no haría falta el break porque ya hay un return
    case '*':
      return a * b;
      break; // Aquí no haría falta el break porque ya hay un return

    default:
      alert('Algún parámetro es incorrecto!')
      break;
  }
}

//* Function with if, else if
function calculator2(a, b, op) {
  if (op === '+') {
    return a + b
  } else if (op === '-') {
    return a - b
  } else if (op === '/') {
    return a / b
  } else if (op === '*') {
    return a * b
  } else {
    alert('Algún parámetro es incorrecto!')
  }
}

// Arrow Functions
// Función de tipo implícita
const message = () => {
  alert('This is a messsage!');
}
// De todos modos debe ser invocada

const resultAdd = (a, b) => {
  return a + b;
}

alert(resultAdd(3, 5));

// Ej Calculator con arrow function

function arrowCalculator(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
      break; // Aquí no haría falta el break porque ya hay un return
    case '-':
      return a - b;
      break; // Aquí no haría falta el break porque ya hay un return
    case '/':
      return a / b;
      break; // Aquí no haría falta el break porque ya hay un return
    case '*':
      return a * b;
      break; // Aquí no haría falta el break porque ya hay un return

    default:
      alert('Algún parámetro es incorrecto!')
      break;
  }
}

alert(arrowCalculator(9, 3, '*'));