function BasicRomanNumerals(str) { 
  
  // Create references for each numeral
  var numbers = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  
  // Keep tally
  var sum = 0;
  
  // Look at current and next numeral to determine value
  for (var i = 0; i < str.length; i++) {
      var curr = numbers[str[i]];
      var next = numbers[str[i+1]];
      
      // If the current value is lesser, subtract it from the next value THEN add that to sum 
      if (curr < next) {
          sum += next - curr;
          
          // Skip next term since it has been absorbed into sum already
          i++;
          
      // If current value is greater than or equal to the next value, increase sum by that amount
      } else {
          sum += curr;
      }
  }
  
  // This represents the total given by the Roman numerals!
  return sum;
}
