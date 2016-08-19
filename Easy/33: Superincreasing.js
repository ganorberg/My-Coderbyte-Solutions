function Superincreasing(arr) { 
    
    // Loop through array starting at second term
    for (let i = 1; i < arr.length; i++) {
    
        // Create array of values before current term
        let prevArr = arr.slice(0, i);
        
        // Sum up previous array
        let prevSum = prevArr.reduce(function(p, v) { return p + v });
        
        // If current term is ever less than or equal to
        // the sum of all numbers before it, then not superincreasing
        if (arr[i] <= prevSum) {
            return false;
        }
    }
    
    // If all values are greater than previous sum, sequence is superincreasing
    return true;
}
