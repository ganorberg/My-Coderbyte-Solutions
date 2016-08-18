function FirstFactorial(num) { 
  
  //recursively multiply by next factorial with base case === 1
  if (num === 1) {
     return 1;
  }
  return num * FirstFactorial(num - 1);
}
