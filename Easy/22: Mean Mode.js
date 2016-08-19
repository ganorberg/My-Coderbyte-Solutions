function MeanMode(arr) { 
  //Objective: Compare mean and mode of array of integers.
  
  let len = arr.length;
  
  // Use reduce to sum all values then divide by total number of values to get mean
  let mean = arr.reduce(function(p, v) { return p + v; }) / len;
  
  // To get mode, we'll need object storage
  let table = {};
  
  // Loop through the array
  for (let i = 0; i < len; i++) {
      let num = arr[i];
      
      // If the integer does not exist in the table, create it with a value of 1. Otherwise, add 1 to value.
      (table[num] === undefined) ? table[num] = 1 : table[num]++;
  }
  
  // Track mode with its count
  let answer = {mode: null, count: 0};
  
  // Loop through integers to determine which has highest count. Update integer with respective count in answer object.
  for (let n in table) {
      if (table[n] > answer['count']) {
          answer['mode'] = parseInt(n);
          answer['count'] = table[n];
      }
  }
  
  // If mode equals mean, return 1. Otherwise, return 0.
  return (answer['mode'] === mean) ? 1 : 0;
}
