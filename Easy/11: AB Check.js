function ABCheck(str) { 

  // Loop through word  
  for (let i = 0; i < str.length; i++) {
  
      // If letter equals 'a', check 3 positions in front and behind for 'b'
      if (str.charAt(i) === 'a') {
          if (str.charAt(i+4) === 'b' || str.charAt(i-4) === 'b') {
              return true;
          }
      }
  }
  
  // If loop fails to return true, then 'a' and 'b' are not 3 spaces apart!
  return false;
}
