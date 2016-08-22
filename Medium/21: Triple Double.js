function TripleDouble(num1,num2) { 
  
  // Need to loop through each character in number, so set to strings
  let str1 = num1.toString();
  let str2 = num2.toString();
  
  // Loop through first number until can't begin a triple match
  for (let i = 0; i < str1.length - 2; i++) {
  
    // If three terms in a row are the same...
    if (str1[i] === str1[i+1] && str1[i+1] === str1[i+2]) {
      
      //.. then loop through second number until can't begin a double match
      for (var j = 0; j < str2.length - 1; j++) {
      
        // If two terms in a row match the character from the first number,
        // then we've found a triple double!
        if (str2[j] === str1[i] && str2[j] === str2[j+1]) {
          return 1;
        }
      }
    }
  }
  
  // If no triple double found, return 0.
  return 0;
}
