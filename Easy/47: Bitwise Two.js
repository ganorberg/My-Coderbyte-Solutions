function BitwiseTwo(strArr) { 
    
    // Create storage for digits that pass operation
    var answer = [];
    
    // Both strings have same length so loop through either
    for (var i = 0; i < strArr[0].length; i++) {
    
        // If either respective digit is a 0, then 0 is pushed instead of 1
        if (strArr[0][i] == 0 || strArr[1][i] == 0) {
            answer.push('0');
        } else {
            answer.push('1');
        }
    }
    
    // Output as string
    return answer.join('');
}


WITHOUT COMMENTS:

function BitwiseTwo(strArr) { 
    var answer = [];
    
    for (var i = 0; i < strArr[0].length; i++) {
        if (strArr[0][i] == 0 || strArr[1][i] == 0) {
            answer.push('0');
        } else {
            answer.push('1');
        }
    }
    return answer.join('');
}
