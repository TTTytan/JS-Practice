(function() {


  // function sum (n) {
  //   return n[2];
  //   //return n.length;
  //   // var total = n[n.length];
  //   // for (var i = n.length; i > 0; i--) {
  //   //   total += n[i-1];
  //   // }
  //   // return total;
  // }

  //console.log(range(1,10));
  console.log(sum(range(1,10)));
  console.log();

})(); 

// range(1,10);
function range (start, end) {

  var storedRange = [];

  for (var n = 0; n <= (end - start); n++) {
    if (n == 0) {
      storedRange[n] = start;
    } else {
      storedRange[n] = storedRange[n - 1] + 1;
    }
  }
  return storedRange;
}

function sum(range) {

  var total = 0;

  for(var n = 0; n < range.length; n++) {
    
    total = range[n] + range[n+1];

  }

  return total;
  //return range[0]+range[1]+range[2]+range[3]+range[4]+range[5]+range[6]+range[7]+range[8]+range[9];

}

