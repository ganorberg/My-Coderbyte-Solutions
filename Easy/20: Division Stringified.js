function DivisionStringified(num1,num2) { 
  
  // Use native toLocaleString method to standardize number
  // Be sure to convert string into number and remove decimals first
  return Number((num1 / num2).toFixed(0)).toLocaleString(); 
         
}
