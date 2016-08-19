function PalindromeCreator(str) {
    
    // If str is already a palindrome:
    if (str === str.split("").reverse().join("")) {
        return "palindrome";
    }
    
    var length = str.length;
    str = str.split("");
    
    // Check to see if you can create a palindrome by only removing one letter:
    
    for (let i = 0; i < length; i++) {
        let testChar = str.splice(i,1).join("");
        if (str.join("") === str.reverse().join("")){
            return testChar;
        }
        str.reverse().splice(i,0,testChar);
    }
    
    // Check to see if you can create a palindrome by removing 2 letters
    // If length > 4 (meaning the result would be at least 3 characters long):
    for (let i = 0; i < length; i++) {
        let testChar = str.splice(i,1).join("");
        if (length > 4) {
          for (let j = 0; j < str.length; j++) {
              let testChar2 = str.splice(j,1).join("");
              if (str.join("") === str.reverse().join("")){
                  return testChar+ "" + testChar2;
                }
                str.reverse().splice(j,0,testChar2);
          }
        }
        str.splice(i,0,testChar);
    }
    
    // If no palindrome was found:
    return "not possible";
}


WITHOUT COMMENTS:

function PalindromeCreator(str) {
    if (str === str.split("").reverse().join("")) {
        return "palindrome";
    }
    var length = str.length;
    str = str.split("");
    for (let i = 0; i < length; i++) {
        let testChar = str.splice(i,1).join("");
        if (str.join("") === str.reverse().join("")){
            return testChar;
        }
        str.reverse().splice(i,0,testChar);
    }
    for (let i = 0; i < length; i++) {
        let testChar = str.splice(i,1).join("");
        if (length > 4) {
          for (let j = 0; j < str.length; j++) {
              let testChar2 = str.splice(j,1).join("");
              if (str.join("") === str.reverse().join("")){
                  return testChar+ "" + testChar2;
                }
                str.reverse().splice(j,0,testChar2);
          }
        }
        str.splice(i,0,testChar);
    }
    return "not possible";
}
