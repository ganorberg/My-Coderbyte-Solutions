function NonrepeatingCharacter(str) { 
  
  // Store key-value pairs for letter: count
  var table = {};
  
  // Build up table
  for (var i = 0; i < str.length; i++) {
  
      // If letter not yet in table, create it with count of 1
      if (table[str[i]] === undefined) {
          table[str[i]] = 1;
          
      // If letter exists in table already, add 1 to count
      } else {
          table[str[i]]++;
      }
  }
  
  // If loop finds letter with a value of 1, then it's the first letter that doesn't repeat!
  for (var letter in table) {
      if (table[letter] === 1) {
          return letter;
      }
  }
}

WITHOUT COMMENTS:

function NonrepeatingCharacter(str) { 

  var table = {};
  
  for (var i = 0; i < str.length; i++) {
      if (table[str[i]] === undefined) {
          table[str[i]] = 1;
      } else {
          table[str[i]]++;
      }
  }
  
  for (var letter in table) {
      if (table[letter] === 1) {
          return letter;
      }
  }
}
