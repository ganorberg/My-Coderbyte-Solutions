function LongestWord(sen) { 
  // A solution without regex!
  
  // Make all letters lowercase for Unicode check and convert to array by splitting at spaces
  let withSymbols = sen.toLowerCase().split(' ');
  
  // Use storage array to push words without symbols
  let noSymbols = [];
  
  // Create memory for word with largest length
  let highest = {word: null, count: 0};
  
  // Loop through array containing symbols
  for (let i = 0; i < withSymbols.length; i++) {
    let word = withSymbols[i];
    
    // For each word, push alphanumeric characters to noSymbols array
    for (let j = 0; j < word.length; j++) {
        let letter = word[j];
        
        if ((word.charCodeAt(j) > 96 && word.charCodeAt(j) < 123) || (word.charCodeAt(j) > 47 && word.charCodeAt(j) < 58)) {
           noSymbols.push(letter);
        }
    }
    
    // If word length without symbols is higher than previous highest amount, store new count and word
    if (noSymbols.length > highest['count']) {
       highest['count'] = noSymbols.length;
       highest['word'] = noSymbols.join('');
    }
    
    // Reset array for next word in loop
    noSymbols = [];
  }
  
  // Return word with highest count
  return highest['word'];
}
