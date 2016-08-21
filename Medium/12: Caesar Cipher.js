function CaesarCipher(str,num) { 
    
    // Create storage for shifted characters
    let answer = [];
    
    // Loop through string
    for (let i = 0; i < str.length; i++) {
    
        // Store unicode and shifted unicode for each character
        let unicode = str.charCodeAt(i);
        let shiftedUnicode = unicode + (num % 26);
        
        // If lowercase alphabetic character...
        if (unicode > 96 && unicode < 123) {
        
            //... and shifted unicode didn't pass 'z', push shifted character
            if (shiftedUnicode < 123) {
              answer.push(String.fromCharCode(shiftedUnicode));
              
            // If passed 'z', subtract 26 to return to beginning of lowercase alphabet
            } else {
              answer.push(String.fromCharCode(shiftedUnicode - 26));
            }
            
        // If uppercase alphabetic character...
        } else if (unicode < 91 && unicode > 64) {
        
            //... and shifted unicode didn't pass 'Z', push shifted character
            if (shiftedUnicode < 91) {
              answer.push(String.fromCharCode(shiftedUnicode));
              
            // If passed 'Z', subtract 26 to return to beginning of uppercase alphabet
            } else {
              answer.push(String.fromCharCode(shiftedUnicode - 26));
            }
            
        // For all non-alphabetic characters, simply push that value to the answer array.
        } else {
            answer.push(str[i]);
        }
    }
    
    // All alphabetic characters are now shifted by the amount requested!
    return answer.join('');
}
