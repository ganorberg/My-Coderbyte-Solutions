function BitwiseOne(strArr) { 
  
  // Need storage array to push 1 or 0 according to rules
  var answer = [];
  
  // If either character is 1, push 1. If both 0, push 0.
  for (var i = 0; i < strArr[0].length; i++) {
      if (strArr[0][i] == 1 || strArr[1][i] == 1) {
        answer.push(1);  
      } else {
        answer.push(0);
      }
  }
  
  // Answer array contains correct binary values. Return as joined string.
  return answer.join('');
}
