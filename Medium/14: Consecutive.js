function Consecutive(arr) { 
    
    // Sort array in descending order
    arr.sort((a, b) => b - a);
    
    // Create storage for number of missing digits
    let missingDigits = 0;
    
    // Compare integer pair values
    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i];
        let next = arr[i+1];
        
        // If different non-consecutive digits, calculate number of digits between
        if (curr - next > 1) {
            missingDigits += (curr - next - 1)
        }
    }
    
    // Return the total number of digits required to make the sequence consecutive!
    return missingDigits;
}
