function AlphabetSoup(str) { 

  // Split string into array of letters to use native sort method
  let arr = str.split('');
  
  // Sort letters by ascending order of Unicode
  arr.sort(function(a, b) { return a.charCodeAt(0) - b.charCodeAt(0); });
  
  // Join letters into string
  return arr.join('');
}
