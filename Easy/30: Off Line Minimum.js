// Objective: Create a subset of an array.

function OffLineMinimum(strArr) { 
  
  // Test for integers
  function isNumeric(n) {
      return !isNaN(parseInt(n)) && isFinite(n);
  }
  
  // Need one array for integer memory while looping and another for smallest integers 
  let integers = [];
  let answer = [];
  
  // Loop through array of characters
  for (let i = 0; i < strArr.length; i++) {
      let char = strArr[i];
      
      // If character is a number, push to integer array and 
      // sort so that integers are always in ascending order
      if (isNumeric(char)) {
          integers.push(parseInt(char));
          integers.sort(function(a, b) { return a - b });
      }
      
      // If character is 'E', push smallest number to answer array and remove from integer array
      if (char === 'E') {
          answer.push(integers.shift());
      }
  }
  
  // Match desired format
  return answer.join(',');
}
