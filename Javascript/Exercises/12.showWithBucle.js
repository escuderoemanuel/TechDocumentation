// Realizar un programa que muestre los números del 1 al 35
// uno debajo del otro, mediante console.log
// Utilizar estructura repetitiva

for (let i = 1; i <= 35; i++) {
  console.log(`For: ${i}`)
}

let counter = 1;
while (counter <= 35) {
  console.log(`While: ${counter}`);
  counter++;
}

let doCounter = 1;
do {
  console.log(`doWhile: ${doCounter}`);
  doCounter++;
} while (doCounter <= 35);