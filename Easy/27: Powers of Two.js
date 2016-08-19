// Objective: Determine whether or not a number is a power of two.

function PowersofTwo(num) { 
  
  // Divide number by 2 until the number is smaller than 2.
  while (num >= 2) {
      num /= 2;
  }
  
  // If loop ends when num equals 1, then num is a power of two. Otherwise, two cannot multiply itself into num so we return false.
  return num === 1;
}
