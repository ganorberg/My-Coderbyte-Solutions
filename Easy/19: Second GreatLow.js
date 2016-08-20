function SecondGreatLow(arr) { 

  // Sort array in ascending order
  let sorted = arr.sort(function(a,b) {return a - b;});
  
  // Edge case: if only two digits, we simply reverse them.
  if (arr.length === 2) {
      return sorted.reverse().join(' ');
  }
  
  // Store the largest and smallest values
  let highest = arr[arr.length - 1];
  let smallest = arr[0];
  
  // Create solution storage
  let answer = [];
  
  // Loop through array
  for (let i = 0; i < arr.length; i++) {
  
    // If value is not equal to highest or lowest, store in answer array
    if (arr[i] !== highest && arr[i] !== smallest) {
        answer.push(arr[i]);
    }  
  }
  
  // Sort new array without largest and smallest values in ascending order
  let newSort = answer.sort(function(a,b) { return a - b; });
  
  // Newly sorted array will have the second lowest and second greatest terms as first and last terms, respectively.
  return answer[0] + " " + answer[answer.length - 1];
}
