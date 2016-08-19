function RectangleArea(strArr) { 
  
  // Create function to format points by erasing parentheses and separating x and y values into subarray
  function makePoint(p) {
    return p.replace('(', '').replace(')', '').split(' ');
  }
  
  // By increasing in order of x-coordinates, we know which values to subtract for width and height
  let sorted = strArr.sort(function(a, b) { return b[1] < a[1] });
  
  // Create 3 coordinate points to find difference of x and y values
  let corner0 = makePoint(strArr[0]);
  let corner1 = makePoint(strArr[1]);
  let corner2 = makePoint(strArr[2]);
  
  // Difference of x values yields width
  let width = Math.abs(corner2[0] - corner1[0]);
  
  // Difference of y values between other two points yields height
  let height = Math.abs(corner1[1] - corner0[1]);
 
  // Area equals width times height
  return width * height;
}
