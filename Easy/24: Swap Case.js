// Objective: Swap the case of each character in the string.

function SwapCase(str) { 
  
  // Create array to modify in place
  chars = str.split("");
  
  // Loop through array of characters
  for (let i = 0; i < chars.length; i++) {
  
      // If current value is uppercase, make lowercase.
      if (chars[i] === chars[i].toUpperCase()) {
          chars[i] = chars[i].toLowerCase();
          
      // If current value is lowercase, make uppercase.
      } else if (chars[i] === chars[i].toLowerCase()) {
          chars[i] = chars[i].toUpperCase();
      }
  }
  
  // Non-alphabetic characters remain unaffected. Return as string.
  return chars.join(""); 
}
