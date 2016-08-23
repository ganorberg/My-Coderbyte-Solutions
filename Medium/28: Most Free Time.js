function MostFreeTime(strArr) { 
  
  // Create function that calculates minutes from midnight for each time
  function minutesFromMidnight(time) {
    
    // Split by colon to access hours and minutes
    let split = time.split(':');
    let hours = parseInt(split[0]);
    let minutes = parseInt(split[1]);
    
    // Calculate total minutes temporarily
    let totalMinutes = hours * 60 + minutes;
    
    // If midnight, subtract 720 minutes
    if (time.includes('A') && hours === 12) {
       totalMinutes -= 12 * 60;
    }
    
    // If pm but NOT noon, add 720 minutes
    if (time.includes('P') && hours !== 12) {
       totalMinutes += 12 * 60;
    }
    
    // Function returns total minutes with edge cases included
    return totalMinutes;
  }
  
  // Create function that converts number of minutes into hour:minute format
  function convertMinsToHrsMins(minutes) {
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return h + ':' + m;
  }
  
  // Create storage for each time's total minutes from midnight
  let minutes = [];
  
  // Loop through all time slots
  for (let time of strArr) {
      
    // Split each time slot into start and end times
    let times = time.split('-');
    
    // Calculate minutes from midnight for each time and store in minutes array
    minutes.push(minutesFromMidnight(times[0]), minutesFromMidnight(times[1]));
  }
  
  // Sort minutes in ascending order
  minutes.sort((a, b) => a - b);
  
  // Create storage for length of free time intervals
  let freeTime = [];
  
  // Subtract each session's start time by previous session's end time to get free time
  minutes.forEach((startTime, index) => {
      if (index % 2 === 0 && index !== 0) {
          freeTime.push(startTime - minutes[index-1]);
      }
  });
  
  // Find the largest amount of free time and return formatted!
  let mostMinutes = freeTime.reduce((p, v) => p > v ? p : v);
  return convertMinsToHrsMins(mostMinutes);
}
