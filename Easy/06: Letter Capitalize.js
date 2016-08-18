function LetterCapitalize(str) { 
  //split into words
  //loop through each word
    //store first letter and rest of word
    //capitalize first letter
    //join first letter with rest of word
    //join words with space
  
  // Split string into words array 
  var words = str.split(' ');
  
  // Create solution storage
  var answer = [];
  
  // Loop through each word
  for (var i = 0; i < words.length; i++) {
  
      // Current word
      var word = words[i];
      
      // Create new word by capitalizing first letter then concatenating with rest of word
      var newWord = word[0].toUpperCase() + word.slice(1, word.length + 1);
      
      // Push newly capitalized word to answer array
      answer.push(newWord);
  }
  
  // Return sentence with spaces
  return answer.join(' ');
}
