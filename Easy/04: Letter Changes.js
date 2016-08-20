function LetterChanges(str) { 
  
  // A solution without regex or Unicode!
  
  // Write out alphabet and shifted alphabet with vowels capitalized
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const NEW_ALPHABET = 'bcdEfghIjklmnOpqrstUvwxyzA';
  
  // Create storage array
  let answer = [];
  
  // Preprocess string to be all lowercase to match alphabet
  str = str.toLowerCase();
  
  // Loop through string
  for (let i = 0; i < str.length; i++) {
  
      // If alphabetic character, store shifted character from new alphabet
      if (ALPHABET.includes(str[i])) {
         answer.push(NEW_ALPHABET[ALPHABET.indexOf(str[i])]);
      
      // If non-alphabetic character, simply push that character to answer array
      } else {
         answer.push(str[i]);
      }
  }
  
  // Join the array into our final modified string!
  return answer.join('');   
}
