function PalindromeCreator(str) {
    
    // Write a palindrome test
    function isPalindrome(string) {
      return string === string.split('').reverse().join('');
    }
    
    // Check if input is already a palindrome
    if (isPalindrome(str)) return 'palindrome';
    
    let arr = str.split('');
    let len = arr.length;
    
    // Remove one character at a time and test if palindrome
    for (let i = 0; i < len; i++) {
        let removedChar = arr.splice(i, 1).join('');
        
        if (isPalindrome(arr.join(''))) return removedChar;
        
        arr.splice(i, 0, removedChar);
    }
    
    // For every character removed, remove another character and test if palindrome
    for (let i = 0; i < len; i++) {
        let removedChar = arr.splice(i, 1).join('');
        
        if (len > 4) {
          for (let j = 0; j < len; j++) {
              let removedChar2 = arr.splice(j, 1).join('');
              
              if (isPalindrome(arr.join(''))) return removedChar + '' + removedChar2;
              
              arr.splice(j, 0, removedChar2);
          }
        }
      
        arr.splice(i, 0, removedChar);
    }
    
    // Since no palindrome was found after removing 2 characters...
    return 'not possible';
}
