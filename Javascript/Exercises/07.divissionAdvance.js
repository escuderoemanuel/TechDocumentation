// The goal of this challenge is to create a JavaScript function that divides two numbers without using the division or multiplication sign.

function division(numerator, denominator) {
  if (denominator === 0) {
    console.log('Cannot divide by 0')
  }

  let result = 0; // Initialize result in 0
  let remainder = numerator // Initialize remainder (resto)

  while (remainder >= denominator) {

    // 8 - 2 = remainder 6 -> result 1
    // 6 - 2 = remainder 4 -> result 2
    // 4 - 2 = remainder 2 -> result 3
    // 2 - 2 = remainder 0 -> result 4
    // 0 - 2 = Does not enter the loop

    remainder -= denominator;
    result++
    // console.log('remainder:', remainder, 'denominator:', denominator, 'result:', result)
  }

  console.log('result:', result);
  return result;
}

division(8, 2)