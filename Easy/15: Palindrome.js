function Palindrome(str) { 

  // Convert to array with spaces removed
  let arr = str.split(' ').join('').split('');
  
  // Reverse characters with native array method
  let reversed = arr.reverse().join('');
  
  // Create original string without spaces to compare
  let noSpaces = str.split(' ').join('');
  
  // After removing all spaces, return Boolean for whether the original string equals the reversed string
  return noSpaces === reversed;
}

WITH CHAINING:

function Palindrome(str) {
  return str.split(' ').join('').split('').reverse().join('') === str.split(' ').join('');
}
