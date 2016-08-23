function MultipleBrackets(str) { 
  
  // Create storage and count for left brackets
  let leftBrackets = [];
  let leftCount = 0;
  
  // Loop through string
  for (let char of str){
    
    // Store and count left brackets
    if (char === '(' || char === '[') {
      leftCount++;
      leftBrackets.push(char);
    
    // For every right parenthesis, check if left parenthesis previously existed to match.
    } else if (char === ')') {
        if (leftBrackets.includes('(') === false) {
          return 0;
          
        // If parentheses match, remove one left parenthesis
        } else {
          leftBrackets.splice(leftBrackets.indexOf('('), 1);
        }
    
    // For every right square bracket, check if left square bracket previously existed to match.
    } else if (char === ']') {
        if (leftBrackets.includes('[') === false) {
          return 0;
          
        // If square brackets match, remove one left square bracket
        } else {
          leftBrackets.splice(leftBrackets.indexOf('['), 1);
        }
    }
  }
  
  // If all pairs match, return 1 with number of pairs or just 1 if no pairs existed
  if (leftBrackets.length === 0) {
      return leftCount > 0 ? 1 + ' ' + leftCount : 1;
      
  // If extra left brackets at end of loop, then not all brackets match!
  } else {
      return 0;
  }
}
