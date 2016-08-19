// Objective: Determine the multiplicative persistence for a given number.

function MultiplicativePersistence(num) { 
  
  // Convert number to array of digits
  function numToArray(n) {
      return n.toString(10).split("").map(function(val){return parseInt(val)});
  }
  
  // Initialize original integer array
  let intArr = numToArray(num);
  
  // Keep track of number of times digits are combined a.k.a. multiplicative persistence
  let count = 0;
  
  // Loop to repeatedly multiply digits, create new array of integers, and increase counter until one digit left
  while (intArr.length > 1) {
      let newDigits = intArr.reduce(function(p, v){return p * v});
      intArr = numToArray(newDigits);
      count++;
  }
  
  // Counter represents additive persistence
  return count;
}
