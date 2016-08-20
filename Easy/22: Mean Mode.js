function MeanMode(arr) { 

  // Sum all values, then divide by the total number of values to get the mean
  let mean = arr.reduce(function(p, v) { return p + v; }) / arr.length;
  
  // Create object with key-value pairs of digit: count
  let table = arr.reduce(function(memo, n) {
    n in memo ? memo[n]++ : memo[n] = 1;
    return memo;
  }, {});
  
  // Track mode and number of times it appears in array
  let answer = {mode: null, count: 0};
  
  // Loop through integers to determine which has highest count. Update mode and count if find new mode.
  for (let n in table) {
      if (table[n] > answer['count']) {
          answer['mode'] = parseInt(n);
          answer['count'] = table[n];
      }
  }
  
  // If mode equals mean, return 1. Otherwise, return 0.
  return (answer['mode'] === mean) ? 1 : 0;
}
