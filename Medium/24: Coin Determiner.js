function CoinDeterminer(num) {
  
  // Create helper function that creates all possible sums
  function addCoins(coins, sums) {
    let output = [];
    
    for (let i = 0; i < coins.length; i++) {
      for (let j = 0; j < sums.length; j++) {
        output.push(coins[i] + sums[j]);
      }
    }
    
    return output;
  }
  
  let coins = [1, 5, 7, 9, 11];
  let counter = 1;
  
  // Track all possible sums
  let coinSums = coins;
  
  // If our number does not exist in the coinSums array,
  // then sum again and increase the sum counter by 1
  while (!coinSums.includes(num)) {
    coinSums = addCoins(coins, coinSums);
    counter++;
  }
  
  // When our input number is found in the coinSums array,
  // counter will represent how many coins were added!
  return counter;
}
