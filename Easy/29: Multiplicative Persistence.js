function MultiplicativePersistence(num) { 
  
  // Convert number to array of digits
  function numToArray(n) {
      return n.toString(10).split("").map(function(val){return parseInt(val)});
  }
  
  // Initialize integer array
  let intArr = numToArray(num);
  
  // Keep track of number of times digits are combined a.k.a. multiplicative persistence
  let count = 0;
  
  // Repeatedly multiply digits, create new integer array for each product, and increase counter until last digit left
  while (intArr.length > 1) {
      let newDigits = intArr.reduce(function(p, v){return p * v});
      intArr = numToArray(newDigits);
      count++;
  }
  
  // The counter represents multiplicative persistence of a number!
  return count;
}
