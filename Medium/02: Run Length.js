function RunLength(str) { 
  
  // Storage for characters and count
  let answer = []; 
  let counter = 1;
  
  // Loop through given string
  for (var i = 0; i < str.length; i++) {
  
    // Track how many times a character repeats
    if (str[i] === str[i+1]) {
      counter++;
      
      // When arrive at different character, store the previous character with its count, then reset counter
    } else {
        answer.push(counter, str[i]);
        counter = 1;
    }
  }
  
  // Return the Run Length Encoding of our string!
  return answer.join("");
}
