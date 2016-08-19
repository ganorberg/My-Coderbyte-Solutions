function LargestPair(num) { 
  //store highest in memory
  //multiply first digit by 10 then add to second digit
  //if curr > highest, store new highest
  //return highest
  
  // Convert to string for looping
  var str = num.toString();
  
  // Store largest double digit pair 
  var highest = 0;
  
  // Construct double digit number by making current digit the tens place
  // and the next digit the ones place, then combine
  for (var i = 0; i < str.length - 1; i++) {
    var tens = Number(str[i]);
    var unit = Number(str[i+1]);
    var curr = tens*10 + unit;
    
    // Update highest value if found larger double digit number
    if (curr > highest)
      highest = curr;
    }
  
  // Let the world know the largest double digit pair!
  return highest;
}

WITHOUT COMMENTS:

function LargestPair(num) { 
  
  var str = num.toString();
  var highest = 0;
  
  for (var i = 0; i < str.length - 1; i++) {
    var tens = Number(str[i]);
    var unit = Number(str[i+1]);
    var curr = tens*10 + unit;
    
    if (curr > highest)
      highest = curr;
    }
    
  return highest;
}
