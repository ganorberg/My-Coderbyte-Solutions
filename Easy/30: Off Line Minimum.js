function OffLineMinimum(strArr) { 
  
  // Test for integers
  function isNumeric(n) {
      return !isNaN(parseInt(n)) && isFinite(n);
  }
  
  // Need one array for holding integers during loop and another for storing smallest integers at each 'E'
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
  
  // Format
  return answer.join(',');
}
