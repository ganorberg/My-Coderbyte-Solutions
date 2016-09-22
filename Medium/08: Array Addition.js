function ArrayAddition(arr) { 
  
  // Sort array in ascending order
  let array = arr.sort((a,b) => a - b);
  
  // Extract target
  let target = array.pop();
  
  // Recursively search all possible combinations
  function lookForSolution(){
    function search(sum, i) {
      if (sum == target) {
        return true;
      }
      else if (sum > target || i === array.length) {
        return null;
      }
      else {
        return search(sum + array[i], i + 1) ||
               search(sum, i + 1);
      }
    }
    
    // Begin search
    return search(0,0);
  }
  
  // Call recursive search function and hope for a solution!
  return lookForSolution() || false; 
}
