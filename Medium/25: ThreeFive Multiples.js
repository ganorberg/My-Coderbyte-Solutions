function ThreeFiveMultiples(num) { 
  
  // To add all multiples
  let sum = 0;
  
  // Loop from first possible multiple to just under given number
  for (let i = 3; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
      }
  }
  
  // This represents the sum of all multiples of 3 and 5 below num!
  return sum;
}
