// The goal of this challenge is to create a JavaScript function that takes a string as an argument and returns the string in reverse order.
function reverOrder(text) {
  return text.split('').reverse().join('');
}
console.log(reverOrder('This text is reverse!'));