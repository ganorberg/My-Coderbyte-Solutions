function ArithGeoII(arr) {
    
    // Write function test for arithmetic sequence where each pair of terms should have same difference
    function isArithmetic(arr) {
      const DIFF = arr[1] - arr[0];
      let arith = true;
        
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] - arr[i] !== DIFF) {
          arith = false;
        }
      }
      return arith;
    }
    
    // Write function test for geometric sequence where each pair of terms should have same ratio
    function isGeometric(arr) {
      const RATIO = arr[1] / arr[0];
      let geo = true;
      
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] / arr[i] !== RATIO) {
          geo = false;
        }
      }
      return geo;
    }
    
    // The tests guide the way!
    if (isArithmetic(arr)) {
      return 'Arithmetic';
    } else if (isGeometric(arr)) {
      return 'Geometric';
    } else {
      return -1;
    }
}
