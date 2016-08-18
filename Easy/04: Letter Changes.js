function LetterChanges(str) { 
  
  // A solution without regex or unicode!
  
  // Write out alphabet and shifted alphabet with vowels capitalized
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const NEW_ALPHABET = 'bcdEfghIjklmnOpqrstUvwxyzA';
  
  // Create storage array
  let answer = [];
  
  // Preprocess string to be all lowercase to match alphabet
  str = str.toLowerCase();
  
  // Loop through string
  for (let i = 0; i < str.length; i++) {
  
      // If alphabetic character, push shifted character in new alphabet
      if (ALPHABET.includes(str[i])) {
         answer.push(NEW_ALPHABET[ALPHABET.indexOf(str[i])]);
      
      // If non-alphabetic character, simply push to answer array
      } else {
         answer.push(str[i]);
      }
  }
  
  // Return answer as string
  return answer.join('');   
}
