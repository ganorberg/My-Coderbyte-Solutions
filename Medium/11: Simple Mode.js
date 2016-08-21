function SimpleMode(arr) { 
  
  // Create storage for mode and its count
  let mode = {integer: null, count: 1};
  
  // Build table with key-value pairs of integer: count
  let table = arr.reduce((memo, value) => {
  
    // Increase integer count by 1 if already exists in table. Otherwise, create integer with count of 1.
    value in memo ? memo[value]++ : memo[value] = 1;
    
    // If any number repeats more than previous mode does, then we've found a new mode!
    if (memo[value] > mode.count) {
        mode.count = memo[value];
        mode.integer = value;
    }
        
    // Don't forget to return the table every time we call reduce!
    return memo;
    
    // Second argument sets memo to empty object for first reduction.
    }, {});
  
  // If no numbers repeat, return -1. Otherwise, return the mode!
  return mode.count > 1 ? mode.integer : -1;      
}
