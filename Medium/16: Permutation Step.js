function PermutationStep(num) { 
    
    // Convert to array for modifying digits in place
    let arr = num.toString().split('');
    
    // Loop through array from back to front
    for (let i = arr.length - 1; i > 0; i--) {
        let curr = arr[i];
        let next = arr[i-1];
        
        // If our current digit is larger than the next digit, swap them
        if (curr > next) {
            arr[i] = next;
            arr[i-1] = curr;
            
            // If you think about it, the smallest permutation occurs by
            // sorting all digits after the swap in ascending order
            let sortedTail = arr.splice(i, arr.length - 1).sort((a, b) => a -b);
            
            // Combine the spliced array and ascending tail to get the next greatest permutation!
            return arr.concat(sortedTail).join('');
        }
    }
    
    // If digits cannot be rearranged to produce a greater number, return -1!
    return -1;     
}
