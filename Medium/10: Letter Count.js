function LetterCount(str) { 
  
  // Separate words into array
  let words = str.split(' ');
  
  // Create storage for word objects with letter counts
  let table = {};
  
  // Track word with largest number of repeated characters
  let answer = {word: null, highest: 1};
  
  // Loop through each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    // Create word property in table with value object of each letter and count
    table[word] = word.split('').reduce((memo, letter) => {
        letter in memo ? memo[letter]++ : memo[letter] = 1;
        
        // If a letter repeats more than any other letter, store new answer
        if (memo[letter] > answer['highest']) {
          answer['highest'] = memo[letter];
          answer['word'] = word;
        }
        return memo;
    }, {})  
  }
  
  // If no repeats, return -1. Otherwise, return first word with greatest number of repeated letters!  
  return answer['highest'] > 1 ? answer['word'] : -1;
}
