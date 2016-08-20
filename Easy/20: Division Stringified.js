function DivisionStringified(num1,num2) { 
  
  // Use native toLocaleString method to standardize numbers. No decimals included here.
  return Number((num1 / num2).toFixed(0)).toLocaleString(); 
}
