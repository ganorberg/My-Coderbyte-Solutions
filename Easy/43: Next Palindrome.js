function NextPalindrome(num) { 
    
  // Create check for palindrome
  function isPalindrome(str) {
    return str.split('').reverse().join('') === str;
  }
  
  // Start checking at next number
  num = num + 1;
  
  // Increase number until find palindrome
  while (isPalindrome(num.toString()) === false) {
    num++;
  }
  
  // When loop exits, we have our next palindrome!
  return (num);
}
