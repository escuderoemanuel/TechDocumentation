// The goal of this challenge is to create a JavaScript function that takes an argument and validates if it is palindrome or not.

function palindromeValidation(data) {

  const dataType = typeof (data) // Analize the data type

  console.log('\nEntered Data:', data)
  console.log('Data Type:', dataType)

  if (dataType === 'string') {
    const argReversed = data.split('').reverse().join(''); // Reverse the entered data
    console.log('Reversed Data:', argReversed)
    const isPalindrome = data === argReversed; // Compare them
    console.log('Is Palindrome:', isPalindrome)

  } else if (dataType === 'number') {
    const argToString = data.toString(); // Convert to string
    const argReversed = argToString.split('').reverse().join(''); // Reverse the entered data
    console.log('Reversed Data:', argReversed)
    const isPalindrome = argToString === argReversed;// Compare them
    console.log('Is Palindrome:', isPalindrome)

  } else {
    console.log('The data type of "arg" is neither number nor hip.')
  }
}

palindromeValidation(23232);
palindromeValidation('level');
palindromeValidation({ 'level': 2 });