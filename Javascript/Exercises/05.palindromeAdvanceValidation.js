// The goal of this challenge is to create a JavaScript function that takes an argument and validates if it is palindrome or not.

function palindromeValidation(data) {

  const dataType = typeof (data) // Analize data type

  console.log('\nEntered Data:', data)
  console.log('Data Type:', dataType)

  if (dataType === 'string') {
    const cleanedData = data.replace(/[^a-zA-Z0-9]/g, ''); // Remove invalid characters
    // ^ -> diferent (!)
    // g -> all matches
    // '' -> replace with empty spaces
    const cleanedDataLower = cleanedData.toLowerCase(); // Convert to lower case
    const argReversed = cleanedDataLower.split('').reverse().join(''); // Reverse cleaned data in lower case
    console.log('Reversed Data:', argReversed)
    const isPalindrome = cleanedDataLower === argReversed; // Compare them
    console.log('Is Palindrome:', isPalindrome)

  } else if (dataType === 'number') {
    const argToString = data.toString(); // Convert to string
    const argReversed = argToString.split('').reverse().join(''); // Reverse string
    console.log('Reversed Data:', argReversed)
    const isPalindrome = argToString === argReversed;// Compare them
    console.log('Is Palindrome:', isPalindrome)

  } else {
    console.log('The data type of "arg" is neither number nor hip.')
  }
}

palindromeValidation(23232);
palindromeValidation('level');
palindromeValidation('Label ebal');
palindromeValidation('A man, a plan, a canal, Panama!');
palindromeValidation({ 'level': 2 });