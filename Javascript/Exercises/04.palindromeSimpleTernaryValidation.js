// The goal of this challenge is to create a JavaScript function that takes an argument and validates if it is palindrome or not.
//! The ternary operator cannot use variable declaration (const, let,...). You must use expressions, not statements, and they must be separated by commas.

function palindromeValidation(arg) {
  const argType = typeof arg; // Analize the data type

  console.log('\nEntered Data:', arg);
  console.log('Data Type:', argType);

  argType === 'string' ?
    (
      argReversed = arg.split('').reverse().join(''), // Reverse the entered data
      console.log('Reversed Data:', argReversed),
      isPalindrome = arg === argReversed, // Compare them
      console.log('Is Palindrome:', isPalindrome)
    )
    :
    argType === 'number' ?
      (
        argToString = arg.toString(), // Convert to string
        argReversed = argToString.split('').reverse().join(''), // Reverse the entered data
        console.log('Reversed Data:', argReversed),
        isPalindrome = arg === argReversed, // Compare them
        console.log('Is Palindrome:', isPalindrome)
      ) :
      console.log('The data type of "arg" is neither number nor string.');
}


palindromeValidation(23232);
palindromeValidation('level');
