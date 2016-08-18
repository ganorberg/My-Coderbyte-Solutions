function SimpleAdding(num) { 
  
  // Create storage for sum
  var sum = 0;
  
  // Add all values up to and including num
  for (var i = 1; i <= num; i++) {
    sum += i;  
  }
  
  // Return total after adding
  return sum;       
}
