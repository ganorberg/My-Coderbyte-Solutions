function DashInsert(str) { 
  
  // Storage for pushing integers and dashes
  let answer = [];
  
  // Loop through array
  for (let i = 0; i < str.length; i++) {
      
      // Number will always be pushed as integer
      answer.push(parseInt(str[i]));
      
      // If odd integer followed by odd integer, push dash
      if (parseInt(str[i]) % 2 === 1 && parseInt(str[i+1]) % 2 === 1) {
         answer.push('-');  
      }
  } 

  // Now all pairs of odds have dash between them!
  return answer.join('');      
}
