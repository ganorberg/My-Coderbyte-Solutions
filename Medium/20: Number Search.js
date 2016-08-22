function NumberSearch(str) { 
  
  // Check Boolean check for alphabetic letter
  function isLetter(c) { return c.toLowerCase() !== c.toUpperCase();}
  
  // Initialize counters at 0
  let letterCount = 0;
  let sum = 0;
  
  // Loop through string to increment counters
  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (isLetter(char)) {
          letterCount++;
      }
      if (Number.isInteger(parseInt((char)))) {
          sum += parseInt(char);
      }
  }
  
  // Divide the sum of all numbers by letter count then round without decimals!
  return (sum / letterCount).toFixed(0);
}
