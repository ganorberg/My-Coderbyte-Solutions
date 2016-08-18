function Palindrome(str) { 

  // Remove spaces by splitting. Then, join characters together and convert to array of characters without spaces.
  var arr = str.split(' ').join('').split('');
  
  // Reverse characters with native method
  var reversed = arr.reverse().join('');
  
  // Create original string without spaces
  var noSpaces = str.split(' ').join('');
  
  // After removing all spaces, return Boolean for whether the original string equals the reversed string
  return noSpaces === reversed;
  
}

WITH CHAINING:

function Palindrome(str) {
  return str.split(' ').join('').split('').reverse().join('') === str.split(' ').join('');
}
