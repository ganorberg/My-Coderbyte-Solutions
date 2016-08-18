function ArrayAdditionI(arr) { 
  
    
  
  // Calculate highest value by reducing array such that only the larger of each pair of values is returned
  let highest = arr.reduce(function(p, v) { return v > p ? v : p; });
  
  // Filter out highest value by keeping all values less than the highest value
  let smallArr = arr.filter(function(val) { return val < highest; });
  
  // Found this subsetsum function from lumberjack87 in Coderbyte forum
  // Uses recursive template from Eloquent Javascript Ch.3 to search all possible combinations via branching
  function subsetsum(target, array) {
    
    // Base case when array is emptied
    if (array.length === 0) {
        return target === 0;
    }
    
    // First term is stored
    let n = array[0];
    
    // Only values after the first term are saved
    array = array.slice(1);
    
    // Call function with same target and new array OR subtract first value from target, then search new array 
    return subsetsum(target, array) || subsetsum(target - n, array);
  }
  
  // Recursive magic finds combination of values in smallArr that add to our highest value
  return subsetsum(highest, smallArr);
}
