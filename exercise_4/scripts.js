(function() {

  console.log(range(1,10));
  console.log(sum(range(1,10)));
  console.log(range(1, 10, 2));
  console.log(range(5, 2, -1));

})(); 

// range(1,10);
function range (start, end, step) {

  var storedRange = [];
  var rangeLength = 0;

  if(step === undefined) { 
    step = 1;
  }

  if(start > end) {
    rangeLength = +start - +end;
  } else {
    rangeLength = +(end - start);
    rangeLength /= +step;
  }

  for (var n = 0; n <= rangeLength; n++) {
    if (n === 0) {
      storedRange[n] = start;
    } else {
      storedRange[n] = storedRange[n - 1] + (step || 1);
    }
  }
  return storedRange;
}

// sum of range[]
function sum(range) {

  var total = 0;

  for(var n = 0; n < range.length; n++) {

    total += +range[n]; //unary + to ensure !NaN

  }

  return total;
}

