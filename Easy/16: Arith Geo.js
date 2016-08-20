function ArithGeo(arr) {
  
  // Store arithmetic difference and geometric ratio
  let diff = arr[1] - arr[0];
  let ratio = arr[1] / arr[0];
  
  // Use counters to see if entire sequence is arithmetic or geometric
  let arithCount = 0;
  let geoCount = 0;
  
  // Loop through sequence
  for (let i = 0; i < arr.length - 1; i++) {
  
      // If difference of terms matches arithmetic difference, add 1 to arithmetic counter
      if (arr[i+1] - arr[i] === diff) {
        arithCount++;  
      }
      
      // If ratio of terms matches geometric ratio, add 1 to geometric counter
      if (arr[i+1] / arr[i] === ratio) {
        geoCount++;
      }
  }
  
  // If all terms share same difference, sequence is arithmetic
  if (arithCount === arr.length - 1) {
      return 'Arithmetic';
  }
  
  // If all terms share same ratio, sequence is geometric
  if (geoCount === arr.length - 1) {
      return 'Geometric';
  }
  
  // If both conditional checks fail, then sequence is neither arithmetic nor geometric!
  return -1;
}
