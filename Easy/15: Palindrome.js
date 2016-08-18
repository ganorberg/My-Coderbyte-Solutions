function Palindrome(str) { 

  // Remove spaces by splitting. Then, join characters together and convert to array of characters without spaces.
  let arr = str.split(' ').join('').split('');
  
  // Reverse characters with native method
  let reversed = arr.reverse().join('');
  
  // Create original string without spaces
  let noSpaces = str.split(' ').join('');
  
  // After removing all spaces, return Boolean for whether the original string equals the reversed string
  return noSpaces === reversed;
  
}

WITH CHAINING:

function Palindrome(str) {
  return str.split(' ').join('').split('').reverse().join('') === str.split(' ').join('');
}
