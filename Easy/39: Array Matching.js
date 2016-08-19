function ArrayMatching(strArr) { 
 
  // Watch out for those string arrays!
  let firstArr = JSON.parse(strArr[0]);
  let secondArr = JSON.parse(strArr[1]);
  
  // Initialize variables for conditional check on array length
  let longerArr, shorterArr;
  
  // Remember longer and shorter array
  if (firstArr.length >= secondArr.length) {
      longerArr = firstArr;
      shorterArr = secondArr;
  } else {
      longerArr = secondArr;
      shorterArr = firstArr;
  }
  
  // Replace values in longer array with sum against shorter array's terms
  for (var i = 0; i < shorterArr.length; i++) {
      longerArr[i] += shorterArr[i];
  }
  
  // Format with hyphens
  return longerArr.join('-');
}
