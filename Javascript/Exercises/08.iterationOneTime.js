// The goal of this challenge is to create a JavaScript function that iterates only once and finds the maximum and minimum numbers in an array.


function findMinMax(array) {
  if (array.length === 0) {
    console.log('Cannot iterate the array.')
    return null;
  }
  let min = array[0]; // Initialize min in 0
  let max = array[0]; // Initialize max in 0

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      // If array[1] > array[0]
      // If array[2] > array[1]
      // ...
      max = array[i];
    }
    if (array[i] < min) {
      // If array[1] < array[0]
      // If array[2] < array[1]
      // ...
      min = array[i];
    }
  }

  return { minNumber: min, maxNumber: max }
}

let array = [8, 56, -4, 99, 13, 44, 38, 86]

let result = findMinMax(array)
console.log('Result:', result);