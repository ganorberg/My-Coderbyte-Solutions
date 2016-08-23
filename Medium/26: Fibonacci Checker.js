function FibonacciChecker(num) { 
    
    // Edge cases
    if (num === 0 || num === 1) {
        return 'yes';    
    }
    
    // Cache pairs of values while looping
    let prev = 0;
    let curr = 1;
    
    // Loop until we match or exceed our number
    while(num > curr) {
        
        // Save previous value temporarily
        let temp = prev;
        
        // Set new previous value to old current value
        prev = curr;
        
        // Set new current value to the sum of old current and old previous values
        curr += temp;
    }
    
    // If we exited the loop when our number equals the current fibonacci value,
    // then our number is part of the fibonacci sequence! Otherwise, the current value
    // has passed over our number, and num is therefore not part of the fibonacci sequence.
    return num === curr ? 'yes' : 'no'
}
