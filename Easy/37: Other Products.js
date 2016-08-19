function OtherProducts(arr) { 

  // Create storage array
  var answer = [];
  
  // Loop through integer array
  for (var i = 0; i < arr.length; i++) {
  
      // Create shallow copy of array
      var newArr = arr.slice();
      
      // Remove current character
      newArr.splice(i, 1);
      
      // Sum all remaining values
      var product = newArr.reduce(function(p, v) { return p * v; });
      
      // Store product in answer array
      answer.push(product);
  }
  
  // Join with hyphens as requested
  return answer.join('-');
}
