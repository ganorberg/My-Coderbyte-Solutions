function SimpleSymbols(str) { 

  // Convert alphabetic characters to lowercase for unicode check
  let str = str.toLowerCase();
  
  // Loop through string
  for (let i = 0; i < str.length; i++) {
  
      // If alphabetic character...
      if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      
          // ...and if doesn't have a plus sign to the left or right...
          if (str[i-1] !== '+' || str[i+1] !== '+') {
          
              // ... we know that not all alphabetic characters have a plus sign to left and right.
              return false;
          }
      }
  }
  
  // If loop never finds an alphabetic character without plus signs to the left or right,
  // then all alphabetic characters have a plus sign to the left and right!
  return true;
}
