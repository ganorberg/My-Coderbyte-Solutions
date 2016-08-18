function LetterCountI(str) { 
  
  // Create object to store word objects, which will contain key-value pairs of letter: count and highest: #
  var table = {};
  
  // Break string into separate words
  var arr = str.split(' ');
  
  // Loop through words
  for (var i = 0; i < arr.length; i++) {
      var word = arr[i];
      
      // Give each word a 'highest' property to tell us its highest letter count
      table[word] = {highest: 1};
      
      // Loop through letters of each word
      for (var j = 0; j < word.length; j++) {
          var letter = word[j];
          
          // If letter doesn't exist in word object, create it with a value of 1
          if (table[word][letter] === undefined) {
              table[word][letter] = 1;
              
          // If letter exists, add 1 to its count and check if this letter has the new highest count in that word
          } else {
              table[word][letter]++;
              if (table[word][letter] > table[word]['highest']) {
                  table[word]['highest'] = table[word][letter];
              }
          }
      }
  }
  
  // Create storage for word with highest count
  var answer = {word: null, highest: 1};
  
  // Loop through words in table to track highest count
  for (var w in table) {
      
      // If current word's highest count is greater than the overall highest, replace highest and store associated word
      if (table[w]['highest'] > answer['highest']) {
          answer['highest'] = table[w]['highest'];
          answer['word'] = w;
      } 
  }
  
  // If letters repeat in any of the words, return word with the highest repeated count. If no repeats, return -1.
  return (answer['highest'] > 1) ? answer['word'] : -1;       
}
