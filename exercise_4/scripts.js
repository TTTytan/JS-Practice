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

  console.log(range(1,10,1));
  console.log(sum(range(1,10)));
  console.log(range(1, 10, 2));
  console.log(range(5, 2, -1));

})(); 

// range(1,10);
function range (start, end, step) {

  var storedRange = [];
  var rangeLength = 0;

  if(start > end) {
    rangeLength = +start - +end;
  } else {
    rangeLength = +end - +start;
  }

  for (var n = 0; n <= rangeLength; n++) {
    if (n === 0) {
      storedRange[n] = start;
    } else {
      storedRange[n] = storedRange[n - 1] + (step || 0);
    }
  }
  return storedRange;
}

function sum(range) {

  var total = 0;

  for(var n = 0; n < range.length; n++) {

    total += +range[n]; //unary + to ensure !NaN

  }

  return total;
}

