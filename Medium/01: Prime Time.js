function PrimeTime(num) { 
  
  // Integers less than 2 cannot be prime
  if (num < 2) {
    return false;
  }
  
  // Brute force method checks if our number is divisible by any number until its square root.
  // This ends the loop before iterating over factors a second time (assuming we had ended the loop at num instead).
  for (i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  
  // If no integers divide into our number (excluding values less than 2), then we have a prime number!
  return true;
}
