function TwoSum(arr) {
  
  // Remove and store first integer
  let target = arr.shift();
  
  // Store length for loops
  const LEN = arr.length;
  
  // Create storage array for sum pair subarrays
  let answer = [];

  // Add each term to rest of terms one by one
  for (let i = 0; i < LEN; i++) {
    for (let j = i + 1; j < LEN; j++) {
      
      // If both integers add to target, push as subarray then end inner loop since pair was found
      if (arr[i] + arr[j] === target) {
        answer.push([arr[i], arr[j]]);
        break;
      }
    }
  }
  
  // If subarray pairs stored, join with space. Otherwise, return -1.
  return (answer.length > 0) ? answer.join(' ') : -1;
}
