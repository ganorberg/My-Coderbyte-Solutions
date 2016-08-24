WIP

function OverlappingRectangles(strArr) { 
  
  function rectangleArea(strArr) { 
    
    // Format points
    function makePoint(p) {
      return p.replace('(', '').replace(')', '').split(',');
    }
    
    // By increasing in order of x-coordinates, we know which values to subtract for width and height
    let sorted = strArr.sort(function(a, b) { return b[1] < a[1] });

    // Create 3 coordinate points to find difference of x and y values
    let corner0 = makePoint(strArr[0]);
    let corner1 = makePoint(strArr[1]);
    let corner2 = makePoint(strArr[2]);

    // Difference of x-values yields width
    let width = Math.abs(corner2[0] - corner1[0]);
  
    // Difference of y-values between other two points yields height
    let height = Math.abs(corner1[1] - corner0[1]);
 
    // Area equals width times height
    return width * height;
  }
  
  let arr = strArr[0].split(',');
  let rectangle1 = [];
  let rectangle2 = [];
  
  for (let i = 0; i < arr.length - 1; i += 2) {
    let point = arr[i] + ',' + arr[i+1];
    
    (i < arr.length / 2) ? rectangle1.push(point) : rectangle2.push(point);
  }

  let area1 = rectangleArea(rectangle1);
  let area2 = rectangleArea(rectangle2);
  
  return area1
}

console.log(OverlappingRectangles(["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"]))
