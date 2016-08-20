function CountingMinutesI(str) { 
  
  // Split into beginning and end times
  let times = str.split('-');
  let startTime = times[0];
  let endTime = times[1];
  
  // Create function that calculates minutes from midnight for each time
  function minutesFromMidnight(time) {
    
    // Split by colon to access hours and minutes
    let split = time.split(':');
    let hours = parseInt(split[0]);
    let minutes = parseInt(split[1]);
    
    // Calculate total minutes temporarily
    let totalMinutes = hours * 60 + minutes;
    
    // If midnight, subtract 720 minutes
    if (time.includes('a') && hours === 12) {
       totalMinutes -= 12 * 60;
    }
    
    // If pm but NOT noon, add 720 minutes
    if (time.includes('p') && hours !== 12) {
       totalMinutes += 12 * 60;
    }
    
    // Function returns total minutes with exceptions included
    return totalMinutes;
  }
  
  // Calculate minutes from midnight for each time
  let startMinutesFromMidnight = minutesFromMidnight(startTime);
  let endMinutesFromMidnight = minutesFromMidnight(endTime);
  
  // If ends same day, return difference
  if (endMinutesFromMidnight > startMinutesFromMidnight) {
     return endMinutesFromMidnight - startMinutesFromMidnight;
     
  // If ends next day, subtract difference from 1440 minutes (total minutes in a day)
  } else {
     return 1440 - (startMinutesFromMidnight - endMinutesFromMidnight);
  }
}
