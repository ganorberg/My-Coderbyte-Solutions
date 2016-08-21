function PalindromeTwo(str) { 
  
  // Make all letters lowercase
  str = str.toLowerCase();
  
  // Create storage for alphabetic chars
  let alphabetArr = [];
  
  // Loop through entire string
  for (let i = 0; i < str.length; i++) {
  
      // Store alphabetic chars
      if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
        alphabetArr.push(str[i]);
      }
  }
  
  // Check to see whether original string matches reversed string!
  if (alphabetArr.join('') === alphabetArr.reverse().join('')) {
      return true;
  } else {
      return false;
  }
}
