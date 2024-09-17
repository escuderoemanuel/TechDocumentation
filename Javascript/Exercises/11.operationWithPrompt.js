/* 
Ingresar 2 números mediante un prompt y almacenar sus valores en 2 variables distintas
Realizar una resta entre los 2 valores
Almacenar el resultado en una tercera variable
Si el resultado es positivo, mostrar un mensaje indicando que la resta fue exitosa
Evaluar si el resultado es par o impar
Si el resultado es negativo, mostrar el mensaje 'el resultado es menor o igual a 0'
*/

let valorUno = Number(prompt('Ingresa el primer valor'));
let valorDos = Number(prompt('Ingresa el segundo valor'));
let resultado = valorUno - valorDos;

if (resultado > 0) {
  alert('La resta fue exitosa')
  if (resultado % 2 == 0) {
    alert(`El resultado de la resta es un número par.\nResultado: ${resultado}`)
  } else {
    alert(`El resultado de la resta es un número impar.\nResultado: ${resultado}`)
  }
} else {
  alert(`El resultado de la resta es menor o igual a 0.\nResultado: ${resultado}`)
}