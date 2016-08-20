function LetterCapitalize(str) { 

  // Split string into array of words 
  let words = str.split(' ');
  
  // Create solution storage
  let answer = [];
  
  // Loop through each word
  for (let i = 0; i < words.length; i++) {
  
      // Current word
      let word = words[i];
      
      // Create new word by capitalizing first letter then concatenating with rest of word
      let newWord = word[0].toUpperCase() + word.slice(1, word.length + 1);
      
      // Push newly capitalized word to answer array
      answer.push(newWord);
  }
  
  // Return sentence with spaces
  return answer.join(' ');
}
