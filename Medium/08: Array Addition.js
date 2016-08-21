function ArrayAddition(arr) { 
  
  // sort array ascending
  arr = arr.sort( function(a,b){return a - b});
  
  var max = arr.pop();
  
  function lookForSolution(){
    function search(sum,i) {
      if ( sum == max ) {
        return true;
      }
      else if ( sum > max || i == arr.length ) {
        return null;
      }
      else {
        return search(sum + arr[i],i + 1) ||
               search(sum,i + 1);
      }
    }
    
    // start search with sum of zero in position zero:
    return search(0,0);
  }
  
  return lookForSolution() || false; 
         
}
