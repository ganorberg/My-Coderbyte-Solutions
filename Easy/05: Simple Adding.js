function SimpleAdding(num) { 
  
  // Create storage for sum
  let sum = 0;
  
  // Add all values from 1 to num, inclusive
  for (let i = 1; i <= num; i++) {
    sum += i;  
  }
  
  // Return total after adding
  return sum;       
}
