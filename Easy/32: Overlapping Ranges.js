function OverlappingRanges(arr) {
    
    // Ranges should overlap by last array value or more
    let desiredOverlap = arr.pop();
    
    // Calculate actual overlap by defining narrower range wtih overlapped values
    // e.g. [4, 10] with [2, 6] becomes [4, 6]
    let lowerBound = Math.max(arr[0], arr[2]);
    let upperBound = Math.min(arr[1], arr[3]);
    
    // Calculate number of values in new range
    let actualOverlap = upperBound - lowerBound + 1;
    
    // Return true if actual overlap is at least desired overlap. Otherwise, return false.
    return actualOverlap >= desiredOverlap;
}
