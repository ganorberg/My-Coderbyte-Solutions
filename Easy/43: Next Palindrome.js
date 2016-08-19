function NextPalindrome(num) { 
  
  // Create check for palindrome
  function isPalindrome(str) {
    return str.split(' ').join('').split('').reverse().join('') === str.split(' ').join('');
  }
  
  // Start checking at next number
  num = num + 1;
  
  // Increase number until find palindrome
  while (isPalindrome(num) === false) {
    num++; 
  }
  
  // If loop exits, we have our next palindrome!
  return (num);
}

WITHOUT COMMENTS:

function NextPalindrome(num) { 
  function isPalindrome(str) {return str.split(' ').join('').split('').reverse().join('') === str.split(' ').join('');}
  num = num + 1;
  while (isPalindrome(num) === false) {num++;}
  return (num);
}
