// Objective: Determine the third largest string within an array.

function ThirdGreatest(strArr) { 
    
    // Sort array in descending order of length of each string
    var arr = strArr.sort(function(a,b){ return b.length - a.length });
    
    // Third term now equals third largest term
    return arr[2]; 
         
}
