function ABCheck(str) { 

  // Loop through word  
  for (let i = 0; i < str.length; i++) {
  
      // If letter equals 'a', check 3 positions in front and behind for 'b'
      if (str.charAt(i) === 'a') {
          if (str.charAt(i+4) === 'b' || str.charAt(i-4) === 'b') {
              return true;
          }
      }
      
      // If letter equals 'b', check 3 positions in front and behind for 'a'
      if (str.charAt(i) === 'b') {
          if (str.charAt(i+4) === 'a' || str.charAt(i-4) === 'a') {
              return true;
          }
      }
  }
  
  // If condition doesn't pass through entire word, then 'a' and 'b' are not 3 spaces apart.
  return false;
}
