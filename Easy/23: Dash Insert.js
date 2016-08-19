//Objective: Manipulate a string using dashes (-).

function DashInsert(str) { 
  
  // Storage for integers with dashes
  let answer = [];
  
  // Loop through array until second to last term to avoid error on i+1 check
  for (let i = 0; i < str.length - 1; i++) {
      
      // Number will always be pushed as integer
      answer.push(parseInt(str[i]));
      
      // If odd integer followed by odd integer, push dash
      if (parseInt(str[i]) % 2 === 1 && parseInt(str[i+1]) % 2 === 1) {
         answer.push('-');  
      }
  } 
  
  // Include last digit which wasn't looped over
  answer.push(str[str.length - 1]);
  
  // Join array into string
  return answer.join('');      
}
