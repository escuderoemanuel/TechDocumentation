/* 
Un restaurante está a punto de calcular la cuenta de un comensal,
al cual se le suma por separado $2800 + $1300 de comida
y $900 + $650 de bebida.
- Crear un programa que calcule el total de la comida,
  el total de la bebida y el total completo de la cena.
- Informar resultado por consola o cartel de alerta.
 */

let comida = 2800 + 1300;
let bebida = 900 + 650;
let totalDeLaCena = comida + bebida;
let mensaje = `El total de la comida es: $${comida} \nEl total de la bebida es: $${bebida}\nEl total de la cena es: $${totalDeLaCena}`
console.log(mensaje)