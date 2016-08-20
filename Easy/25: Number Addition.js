function NumberAddition(str) { 
  
  // No regex or eval used!
  
    // Found deep integer check on Stack Overflow by Starx
    function isNumeric(n) {
        return !isNaN(parseInt(n)) && isFinite(n);
    }
    
    // Need one storage array for temporary consecutive digits 
    // and another to combine those into the actual multiple-digit number they represent
    let digits = [];
    let realNumbers = [];
    
    // Loop through string
    for (let i = 0; i < str.length; i++) {
        
        // Readability!
        let char = str[i];
        let nextChar = str[i+1];
        
        // If current character is an integer, push that value to digits array
        if (isNumeric(char) === true) {
            digits.push(char);
            
            // If next character is NOT an integer, then current number is finished,
            // so push previously consecutive digits to realNumbers array and clear digits for next loop.
            if (isNumeric(nextChar) === false) {
               realNumbers.push(digits.join(''));
               digits = [];
            }
        }
    }
    
    // If no numbers exist in string, return 0. If numbers do exist, add 'em up!
    return realNumbers.length ? realNumbers.reduce(function(p, v) { return parseInt(p) + parseInt(v); }) : 0;
}
