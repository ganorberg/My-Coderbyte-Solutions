function WaveSorting(arr) { 
  
  // Create object with key-value pairs of unique digit: count
  let digitCounts = arr.reduce(function(memo, value) {
    value in memo ? memo[value]++ : memo[value] = 1;
    return memo;
  }, {});
  
  // Can wave sort if no number repeats more than all other numbers combined
  // so need to store the largest repeat
  let highestCount = 1;
  
  // Loop through object with digits and their counts
  for (let digit in digitCounts) {
  
    // Store highest count
    if (digitCounts[digit] > highestCount) {
      highestCount = digitCounts[digit];
    }
  }
  
  // If one number's count doesn't exceed half the total of numbers, we can wave sort!
  return highestCount <= (arr.length / 2);
}
