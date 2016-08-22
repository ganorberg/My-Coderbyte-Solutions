function SwapII(str) { 
  
  // A solution without regex or Unicode!
  
  // Create Boolean check for alphabetic letter
  function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
  }
  
  // Create function to swap the case for all alphabetic letters in a word
  function swapCase(str) { 
    let swapped = str.split('').map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    });
    return swapped.join(''); 
  }
  
  // Create function to swap numbers with letters between them
  function swapNumbers(arr) {
  
    // Loop through array of characters
    for (let i = 0; i < arr.length - 1; i++) {
      let curr = arr[i];
      let next = arr[i+1];
    
      // If current char is a number AND next char is a letter...
      if (!isNaN(curr) && isLetter(next)) {
      
        //... loop through rest of word beyond next letter
        for (let j = i+2; j < arr.length; j++) {
        
          // If we encounter another number, swap the numbers!
          if (!isNaN(arr[j])) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
    }
  
    // Return word with numbers swapped or, if no swap, as is
    return arr.join('');
  }
  
  // Create storage for modified words
  let answer = [];
  
  // Split string to later loop through every word
  let arr = str.split(' ');
  
  // Loop through words to swap cases and numbers, then push to answer
  for (let i = 0; i < arr.length; i++) {
      answer.push(swapNumbers(swapCase(arr[i]).split('')));
  }
  
  // Return with spaces for a successful case AND number swap!
  return answer.join(' '); 
}
