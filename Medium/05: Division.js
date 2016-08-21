function Division(num1,num2) { 
  
  // Need minimum value to begin looping through factors
  var min = Math.min(num1, num2);
  
  // A factor is found when both inputs are divisible by the same number
  for (let i = min; i > 0; i--) {
      
      // The first shared factor will be the GCF since we're looping downward!
      if ((num1 % i === 0) && (num2 % i === 0)) {
          return i;
      }
  }
}
