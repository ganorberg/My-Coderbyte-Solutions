function SimpleSymbols(str) { 

  // Convert alphabetic characters to lowercase for Unicode check
  str = str.toLowerCase();
  
  // Loop through string
  for (let i = 0; i < str.length; i++) {
  
      // If alphabetic character...
      if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      
          // ...and it doesn't have a plus sign to the left or right...
          if (str[i-1] !== '+' || str[i+1] !== '+') {
          
              // ... we know that at least one alphabetic character lacks a plus sign to the left or right!
              return false;
          }
      }
  }
  
  // If loop never finds an alphabetic character without plus signs to the left or right,
  // then all alphabetic characters must have a plus sign to the left and right!
  return true;
}
