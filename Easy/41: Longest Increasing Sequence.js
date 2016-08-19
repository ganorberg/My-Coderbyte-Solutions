function LongestIncreasingSequence(arr) {
    let len = arr.length;
    let arrHolder = [];
    
    //evaluate each possible combination of numbers
    for (let i = Math.pow(2, len); i < Math.pow(2, len + 1); i++) {
        
        //numArray is a binary digit, the 0s and 1s representing whether to include
        //a number or not in the combination array.  There will be 2 ^ n combinations
        //to get leading zeros, use numbers from 2^n to 2^n+1, then slice off the leading 1
        let numArray = i.toString(2).slice(1).split('');
        
        //hold the selected numbers in the newSeq array
        newSeq = [];
        
        //populate the newSeq array
        arr.forEach((val, ind) => {
            if (numArray[ind] === '1') {
            newSeq.push(val);
            }
        });
        
        // include the newSeq array into arrHolder
        arrHolder.push(newSeq);
    }
    
    //take out all the arrays that are not ascending (use the ascend() to determine)
    arrHolder = arrHolder.filter(val => ascend(val));
    
    //replace each passing array with its length
    let arrLength = arrHolder.map(val => val.length);
    
    //return the largest length value
    return Math.max(...arrLength);
}


function ascend(inputArr) {
    let arrlen = inputArr.length;
    return inputArr.every((val, ind) => {
        if (ind < arrlen - 1) {
            return val < inputArr[ind + 1];
        }
        return true;
    });
}
