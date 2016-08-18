function ArithGeo(arr) { 
  //get diff and ratio
  //loop to see if diff and ratio apply to all terms
  //track that sequence continues with counters
  //if counters === length-1, return
  
  // Store arithmetic difference and geometric ratio
  var diff = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];
  
  // Use counters to see if entire sequence is arithmetic or geometric
  var arithCount = 0;
  var geoCount = 0;
  
  // Loop through sequence
  for (var i = 0; i < arr.length - 1; i++) {
  
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
  
  // If both conditional checks fail, then sequence is neither arithmetic nor geometric
  return -1;
}
