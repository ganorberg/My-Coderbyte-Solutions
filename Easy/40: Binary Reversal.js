function BinaryReversal(str) { 
  
  // Thanks to Infinities Loop on Stack Overflow for this padding function!
  function pad(num, size) {
    var s = num+"";
    while (s.length < size) {s = "0" + s;}
    return s;
  }
  
  // Convert to binary
  let binary = Number(str).toString(2);
  
  // Determine number of bits
  let bits = Math.ceil(binary.length / 8);
  
  // Convert number of bits into total digit length
  let digits = 8 * bits;
  
  // Pad zeros onto leading bit
  let padded = pad(binary, digits);
  
  // Reverse binary string
  let reversed = padded.split('').reverse().join('');
  
  // Convert to decimal
  let decimal = parseInt(reversed, 2);
  
  return decimal;
}

CONDENSED WITH CHAINING:

function BinaryReversal(str) { 
  function pad(num, size) {
    let s = num.toString();
    while (s.length < size) {s = "0" + s;}
    return s; }
  let binary = Number(str).toString(2);
  return parseInt(pad(binary, 8 * Math.ceil(binary.length / 8)).split('').reverse().join(''), 2);
}
