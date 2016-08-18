function VowelCount(str) { 
  
  // Make all letter lowercase for conditional check in loop
  var str = str.toLowerCase();
  
  // Create counter storage
  var counter = 0;
  
  // Loop through string
  for (var i = 0; i < str.length; i++) {
  
      // If character is a vowel, add 1 to counter
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
          counter++;
      }
  }
  
  // Counter represents total number of vowels in string
  return counter;
}
