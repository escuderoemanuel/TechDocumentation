// Ejercicio

//* En un campo de entrenamiento de Pokemon, se necesita evaluar el desempeño de cada Pokémon en sus batallas para determinar si están listos para competir en la liga.

//? Crea una función en JS que calule el promedio de habilidades de un Pokémon y determine si está preparado para la competición (promedio mayor o igual a 70) o no (promedio menor a 70)
//? Utiliza arrays para almacenar las habilidades de cada Pokémon y sus nombres.

//* Pistas

//* Crea un array de nombres de Pokémon y una matriz de habilidades donde el índice de cada array con los nombres de los Pokémons represente la fila de habilidades de la matriz.
//* Ejemplo: Si Bulbasaur es el Pokémon en la posición 1, la fila 1 de la matriz tendrá sus habilidades.

//* Utiliza métodos de array para manejar los datos y calcular el promedio de habilidades.
//* La función debe mostrar en consola el nombre del Pokémon, sus habilidades y si esta listo o no para la competición.
//* Podés crear más de una función para diferentes tareas si querés modularizar más aún tu aplicación.


let pokemonName = ['Charmander', 'Pikachu', 'Bulbasur', 'Squirtle'];

let skillLevel = [
  [80, 75, 90], // Charmander
  [20, 75, 99], // Pikachu
  [80, 25, 50], // Bulbasur
  [90, 78, 42], // Squirtle
];

function calculateAverage(skillLevel) {
  let average = [];
  for (let i = 0; i < skillLevel.length; i++) {
    let row = skillLevel[i]
    let add = row.reduce((total, skill) => total + skill, 0);
    average[i] = add / row.length;
  }
  return average;
}

function isReady(pokemonName, average) {
  for (let i = 0; i < average.length; i++) {
    if (average[i] >= 70) {
      console.log(`El pokémon ${pokemonName[i]} tiene un promedio de ${average[i]}%, por lo que está preparado para la batalla.`)
    } else {
      console.log(`El pokémon ${pokemonName[i]} tiene un promedio de ${average[i]}%, por lo que aún NO está preparado para la batalla.`)
    }
  }
}

let averages = calculateAverage(skillLevel);
isReady(pokemonName, averages);
