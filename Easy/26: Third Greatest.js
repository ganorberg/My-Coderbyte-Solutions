function ThirdGreatest(strArr) { 
    
    // Sort array in descending order of each string's length
    var arr = strArr.sort(function(a,b){ return b.length - a.length });
    
    // Third term now equals third largest term!
    return arr[2]; 
}
