function TimeConvert(num) { 
  
  // The number of hours is represented by the floor integer after the number is divided by 60
  let hours = Math.floor(num / 60);
  
  // The number of leftover minutes is represented by the remainder
  let minutes = num % 60;
  
  // Concatenate hours and minutes with a colon between to match the desired format
  return hours + ":" + minutes;
  
}
