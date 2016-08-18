function ExOh(str) { 
  
  // Establish counters for 'x' and 'o'
  let x = 0;
  let o = 0;
  
  // Loop through string
  for (let i = 0; i < str.length; i++) {
  
      // Add 1 to respective counter each time an 'x' or 'o' is found
      if (str.charAt(i) === 'x') {
          x++;
      } else if (str.charAt(i) === 'o') {
          o++;
      }
  }
  
  // If the counters for 'x' and 'o' are the same, returns true. Otherwise, returns false.
  return x === o;
}
