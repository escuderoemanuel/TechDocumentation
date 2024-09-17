// Realizar la cuenta regresiva para el año nuevo
// comenzando en 10 y temrinando en 0
// Al finalizar, debe mostrarse el mensaje 'Feliz año nuevo'
//! Lo hago de 10 a 1, porque en el 0 ya sería año nuevo

let message = 'Feliz año nuevo! 🥳🎉';

for (let i = 10; i > 0; i--) {
  console.log(`For: ${i}`)
}
console.log(message)

let counter = 10;
while (counter > 0) {
  console.log(`While: ${counter}`)
  counter--
}
console.log(message)

let doCounter = 10;
do {
  console.log(`doWhile: ${doCounter}`)
  doCounter--;
} while (doCounter > 0);
console.log(message)
