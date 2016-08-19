// Objective: Search string for all integers then add.

function NumberAddition(str) { 
  
  // No regex or eval used!
  
    // Found deep integer check on Stack Overflow by Starx
    function isNumeric(n) {
        return !isNaN(parseInt(n)) && isFinite(n);
    }
    
    // Need one storage array for individual digits and one to push numbers with multiple digits
    let digits = [];
    let realNumbers = [];
    
    // Loop through string
    for (let i = 0; i < str.length; i++) {
        
        // Readability always helps
        let char = str[i];
        let nextChar = str[i+1];
        
        // If current character is an integer, push that value to digits array
        if (isNumeric(char) === true) {
            digits.push(char);
            
            // If next character is not integer, current number is finished. Push to 
            // realNumbers array and clear digits for next loop.
            if (isNumeric(nextChar) === false) {
               realNumbers.push(digits.join(''));
               digits = [];
            }
        }
    }
    
    // If numbers exist in string, sum them. If no numbers, return 0.
    return realNumbers.length ? realNumbers.reduce(function(p, v) { return parseInt(p) + parseInt(v); }) : 0;
}
