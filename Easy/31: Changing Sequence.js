function ChangingSequence(arr) { 
  
  // Calculate whether beginning with increasing or decreasing sequence
  let diff = arr[1] - arr[0];
  
  // Loop through sequence
  for (let i = 0; i < arr.length; i++) {
      
      // Readability
      let curr = arr[i];
      let next = arr[i+1];
      
      // If increasing sequence, return index when stops increasing
      if (diff > 0) {
          if (curr > next) {
              return i;
          }
      }
      
      // If decreasing sequence, return index when stops decreasing
      if (diff < 0) {
          if (curr < next) {
              return i;
          }
      }
  }
  
  // If never find change of sequence, return -1.
  return -1;
}
