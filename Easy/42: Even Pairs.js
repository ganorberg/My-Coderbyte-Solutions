function EvenPairs(str) { 

  // Create array where odds will never be pushed
  var noOdds = [];
  
  // Loop through str pushing non-odd characters
  for (var i = 0; i < str.length; i++) {
      if (parseInt(str[i]) % 2 !== 1) {
          answer.push(str[i]);
      }
  }
  
  // All numbers are now even. If any two next to each other, return true.
  for (var j = 0; j < answer.length - 1; j++) {
      if (!isNaN(parseInt(answer[j])) && !isNaN(parseInt(answer[j+1]))) {
          return true;
      }
  }
  
  // If no pairs exist, return false.
  return false;
}
