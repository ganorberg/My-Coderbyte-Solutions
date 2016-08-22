function BracketMatcher(str) {
    
    // Track number of left parens vs right parens
    let counter = 0;
    
    // Loop through string
    for (let i = 0; i < str.length; i++) {
        
        // Increase counter by 1 if we find a left parens
        if (str[i] === "(") {
            counter++;
            
        // Decrease counter by 1 if we find a right parens
        } else if (str[i] === ")") {
            counter--;
        }
        
        // If counter drops below 0, a right parens has no left match!
        if (counter < 0) {
            return 0;
        }
    }
    
    // If all pairs match, return 1! Otherwise, return 0.
    return counter === 0 ? 1 : 0;
}
