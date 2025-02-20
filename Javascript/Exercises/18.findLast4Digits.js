/* 
Una computadora comienza imprimiendo los números 2023, 2024 y 2025.
Luego continúa imprimiendo sin parar la suma de los últimos 3 números que imprimió: 6072, 10121, 18218, …
¿Cuáles son los últimos 4 dígitos del número impreso en la posición 2023202320232023?
Por ejemplo, en la posición 50, está impreso el número 8188013234823360 que termina en 3360.
*/
console.log(`Starting...`);

function findLast4Digits(position) {
  let a = 2023;
  let b = 2024;
  let c = 2025;
  let current;
  let seen = new Map(); // Para detectar ciclos

  for (let i = 4; i <= position; i++) {
    current = (a + b + c) % 10000; // Solo mantenemos los últimos 4 dígitos

    if (seen.has(`${a},${b},${c}`)) {
      let cycleStart = seen.get(`${a},${b},${c}`);
      let cycleLength = i - cycleStart;
      let remainingSteps = (position - cycleStart) % cycleLength + cycleStart;
      return findLast4Digits(remainingSteps);
    }

    seen.set(`${a},${b},${c}`, i);
    a = b;
    b = c;
    c = current;
  }

  return current.toString().padStart(4, '0');
}

let position = 2023202320232023n; // Usamos BigInt para manejar números grandes
let reducedPosition = Number(position % 10000n); // Reducimos el número para que sea manejable
console.log(`Position: ${reducedPosition}`);
console.log(`Result: ${findLast4Digits(reducedPosition)}`);
