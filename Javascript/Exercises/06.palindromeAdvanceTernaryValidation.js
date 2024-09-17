// The goal of this challenge is to create a JavaScript function that takes an argument and validates if it is palindrome or not.

function palindromeValidation(data) {
  const dataType = typeof data; // Analize the data type

  console.log('\nEntered Data:', data);
  console.log('Data Type:', dataType);

  dataType === 'string' ?
    (
      cleanedData = data.replace(/[^a-zA-Z0-9]/g, ''), // Remove invalid characters
      // ^ -> diferent (!)
      // g -> all matches
      // '' -> replace with empty spaces
      cleanedDataLower = cleanedData.toLowerCase(), // Convert to lower case
      dataReversed = cleanedDataLower.split('').reverse().join(''), // Reverse claned data
      console.log('Reversed Data:', dataReversed),
      isPalindrome = cleanedDataLower === dataReversed, // Compare them
      console.log('Is Palindrome:', isPalindrome)
    ) :
    dataType === 'number' ?
      (
        // Convert to string, reverse string, and compare
        dataToString = data.toString(),
        dataReversed = dataToString.split('').reverse().join(''),
        console.log('Reversed Data:', dataReversed),
        isPalindrome = dataToString === dataReversed, // Compare them
        console.log('Is Palindrome:', isPalindrome)
      ) :
      console.log('The data type of "arg" is neither number nor string.');
}



palindromeValidation(23232);
palindromeValidation('level');
palindromeValidation('Label ebal');
palindromeValidation('A man, a plan, a canal, Panama!');
palindromeValidation({ 'level': 2 });