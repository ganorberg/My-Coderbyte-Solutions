// Objective: Determine the multiplicative persistence for a given number.

function MultiplicativePersistence(num) { 
  
  //
  function numToArray(n) {
      return n.toString(10).split("").map(function(val){return parseInt(val)});
  }
  
  let intArr = numToArray(num);
  let count = 0;
  
  while (intArr.length > 1) {
      let newDigits = intArr.reduce(function(p, v){return p * v});
      intArr = numToArray(newDigits);
      count++;
  }
  
  return count;
}
