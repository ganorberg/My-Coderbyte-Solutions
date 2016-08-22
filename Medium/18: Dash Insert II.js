function DashInsertII(num) { 
    
    // Write parity functions
    function isOdd(n) {
        return n % 2 === 1;
    }
    function isEven(n) {
        return n % 2 === 0;
    }
    
    // Convert num to string for looping
    let str = num.toString();
    
    // Create storage for integers, dashes and asterisks
    let answer = [];
    
    // Loop through every digit
    for (let i = 0; i < str.length; i++) {
      
        // Convert each digit into a number data type
        let curr = parseInt(str[i]);
        let next = parseInt(str[i+1]);
        
        // Push the current integer
        answer.push(curr);
        
        // If consecutive terms share parity and neither is 0, insert symbol
        if (isOdd(curr) && isOdd(next)) {
            answer.push('-');    
        }
        if (isEven(curr) && isEven(next) && curr !== 0 && next !== 0) {
            answer.push('*');
        }
    }
    
    // Return manipulated number!
    return answer.join('');     
}
