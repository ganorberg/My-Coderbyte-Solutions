function LetterCountI(str) { 
  
  // Create object to store word objects, which will contain key-value pairs of letter: count and highest: #
  let table = {};
  
  // Break string into separate words
  let arr = str.split(' ');
  
  // Loop through words
  for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      
      // Give each word a 'highest' property to tell us its highest letter count
      table[word] = {highest: 1};
      
      // Loop through letters of each word
      for (let j = 0; j < word.length; j++) {
          let letter = word[j];
          
          // If letter doesn't exist in word object, create it with a value of 1
          if (table[word][letter] === undefined) {
              table[word][letter] = 1;
              
          // If letter exists, add 1 to its count and update highest if this letter has the new highest count in that word
          } else {
              table[word][letter]++;
              if (table[word][letter] > table[word]['highest']) {
                  table[word]['highest'] = table[word][letter];
              }
          }
      }
  }
  
  // Create storage for word with highest count
  let answer = {word: null, highest: 1};
  
  // Loop through words in table to track highest count per word
  for (let w in table) {
      
      // If current word's highest count is greater than the overall highest, replace highest and store associated word
      if (table[w]['highest'] > answer['highest']) {
          answer['highest'] = table[w]['highest'];
          answer['word'] = w;
      } 
  }
  
  // If no letters repeat in any word, return -1. Otherwise, return word with the most repeated letters!
  return (answer['highest'] > 1) ? answer['word'] : -1;       
}
