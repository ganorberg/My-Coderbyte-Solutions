function StringScramble(str1,str2) { 
    
    // Convert string to mutable array
    let arr1 = str1.split('');
    
    // Loop through second string
    for (let i = 0; i < str2.length; i++) {
    
        // If character of string 2 exists in string 1, we delete that char from array 1.
        // Any time a value is not found, we know string 2 cannot be rearranged into string 1.
        if (!arr1.includes(str2[i])) {
            return false;
        } else {
            arr1.splice(arr1.indexOf(str2[i]), 1);
        }
    }
    
    // String 2 can be rearranged into string 1 if we were able to splice every letter out of array 1!
    return true;
}
