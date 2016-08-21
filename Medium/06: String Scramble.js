function StringScramble(str1,str2) { 
    
    // Convert string to mutable array
    let arr1 = str1.split('');
    
    // Loop through second string
    for (let i = 0; i < str2.length; i++) {
    
        // When a value is not found, we know string 2 cannot be rearranged into string 1.
        if (!arr1.includes(str2[i])) {
            return false;
            
        // For every matching char, we remove that char from array 1 to track duplicates
        } else {
            arr1.splice(arr1.indexOf(str2[i]), 1);
        }
    }
    
    // If we were able to splice every letter out of array 1, then string 2 can be rearranged into string 1!
    return true;
}
