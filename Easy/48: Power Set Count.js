function PowerSetCount(arr) { 
  
  // Total permutations is represented by 2 raised to the number of digits. Hence, "Power" set!
  return Math.pow(2, arr.length);
}
