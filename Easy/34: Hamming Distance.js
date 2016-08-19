function HammingDistance(strArr) { 
  
  // Track number of different characters
  let counter = 0;
  
  // Loop through first string
  for (let i = 0; i < strArr[0].length; i++) {
  
      // When characters in same position don't match, increase counter by 1
      if (strArr[0][i] !== strArr[1][i]) {
          counter++;
      }
  }
  
  // Counter represents hamming distance
  return counter;       
}
