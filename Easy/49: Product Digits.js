function ProductDigits(num) { 

  // Create function that generates list of factor pairs
  function factors(n) {
    let factors = [1]; // Always include 1.
    let i, j;
  
    // Determine our increment value for the loop and starting point.
    n % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= Math.floor(n/2); i += j) {
        if (n % i === 0) {
            factors.push(i)
        }
    }

    factors.push(n); // Always include the original number.
    return factors;
  }
  
  // Generate factors for our number
  let factorList = factors(num);
  
  // Create storage for pair subarrays
  let factorPairs = [];
  
  // Factor pairs are generated from first and last factors, then moving inward and taking new first and last
  for (let k = 0; k < factorList.length/2; k++) {
    let first = factorList[k];
    let last = factorList[factorList.length - 1 - k];
    factorPairs.push([first, last]);
  }
 
  // Store smallest number of digits necessary to multiply into num
  let lowest = num.toString().length + 1;
  
  // Loop through factorPairs to calculate total number of digits per pair
  for (let m = 0; m < factorPairs.length; m++) {
    let digits = factorPairs[m][0].toString() + factorPairs[m][1].toString();
    
    // The factor pair with the fewest digits should end up as lowest  
    if (digits.length < lowest) {
      lowest = digits.length;
    }
  }
  
  // This represents our lowest number of product digits!
  return lowest;
}


WITHOUT COMMENTS:

function ProductDigits(num) { 
  function factors(n) {
    let factors = [1];
    let i, j;
    n % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
    for (i; i <= Math.floor(n/2); i += j) {
        if (n % i === 0) {
            factors.push(i)
        }
    }
    factors.push(n);
    return factors;
  }
  
  let factorList = factors(num);
  let factorPairs = [];
  
  for (let k = 0; k < factorList.length/2; k++) {
    let first = factorList[k];
    let last = factorList[factorList.length - 1 - k];
    factorPairs.push([first, last]);
  }
 
  let lowest = num.toString().length + 1;
  
  for (let m = 0; m < factorPairs.length; m++) {
    let digits = factorPairs[m][0].toString() + factorPairs[m][1].toString();
      
    if (digits.length < lowest) {
      lowest = digits.length;
    }
  }
  return lowest;
}
