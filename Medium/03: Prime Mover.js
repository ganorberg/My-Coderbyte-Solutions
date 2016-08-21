function PrimeMover(num) {
  
  // Create function that returns Boolean for whether a number is prime
  function isPrime(n) { 
    if (n < 2) {
        return false;
    }
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
  }
  
  // Increment when we find a prime number
  let counter = 0;
  
  // Loop through values given in prompt
  for (let j = 2; j < 10000; j++) {
      
      // When a value is prime, counter is incremented by 1
      if (isPrime(j)) {
          counter++;
      }
      
      // When counter equals our target number, we know that j is the num'th prime!
      if (counter === num) {
          return j;
      }
  }
}
