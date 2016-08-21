function SimpleMode(arr) { 
  
  // Create storage for mode and its count as building table
  let mode = {integer: null, count: 1};
  
  // Build table
  let table = arr.reduce((memo, value) => {
  
      // Increase integer count by 1 if already exists in table. Otherwise, create integer with count of 1
      value in memo ? memo[value]++ : memo[value] = 1;
      
      // If any number repeats more than previous mode, save new mode info
      if (memo[value] > mode.count) {
          mode.count = memo[value];
          mode.integer = value;
      }
      return memo}, {});
  
  // If no numbers repeat, return -1. Otherwise, return the mode!
  return mode.count > 1 ? mode.integer : -1;      
}
