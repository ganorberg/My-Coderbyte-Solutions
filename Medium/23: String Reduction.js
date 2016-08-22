function StringReduction(str) { 
    
  // Need array for native reduce method
  let arr = str.split('');
  
  // Create storage for each reduction
  let reduced = [];
  
  // Create function that reduces depending on the values of pairs of characters  
  function doReduce(array) {
  
    // Since we'll be reducing multiple times and appending to reduced, 
    // we empty the array before adding newly reduced values to it
    reduced = [];
    
    // Reduction begins at first and second characters
    let reduction = array.reduce((memo, curr) => {
    
      // If different letters, combine into non-included letter from set of 'abc'
      if ((memo === 'a' && curr === 'b') || (memo === 'b' && curr === 'a')) {
          return 'c';
      } else if ((memo === 'a' && curr === 'c') || (memo === 'c' && curr === 'a')) {
          return 'b';
      } else if ((memo === 'b' && curr === 'c') || (memo === 'c' && curr === 'b')) {
          return 'a';
          
      // If same letters, push one to reduced array and continue reduction
      } else {
          reduced.push(memo)
          return curr;
      }
    });
    
      // Reduction always leaves one final term, which we add
      // to the reduced array before returning it
      reduced.push(reduction)
      return reduced;
  } 
  
  // Perform first reduction on original array
  doReduce(arr);
  
  // Until all terms are the same, continue to reduce the reduced arrays
  while (reduced.every((val) => val === reduced[0]) === false) {
    doReduce(reduced);
  }
  
  // We now have the smallest number of characters possible through this reduction method!
  return reduced.length;
}
