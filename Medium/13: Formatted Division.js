function FormattedDivision(num1,num2) { 
    /* 
     * We have a native method for this type of output!
     * But be careful about the data type per method, since all require numbers.
     * toFixed returns a STRING, so we convert to a number for toLocaleString.
     * The arguments in toLocaleString set the region standard for decimals/ commas
     * and amount of sigfigs after the decimal place.
     */  
    
    return Number((num1 / num2).toFixed(4)).toLocaleString(undefined, { minimumFractionDigits: 4 });
}
