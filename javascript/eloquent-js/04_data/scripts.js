(function() {

  // console.log(range(1,10));
  // console.log(sum(range(1,10)));
  // console.log(range(1, 10, 2));
  // console.log(range(5, 2, -1));

  //console.log(reverseArray(["A", "B", "C","D","E"]));


  //var arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //reverseArrayInPlace(arrayValue);

  console.log(arrayToList([10,20]));

})();

// A List
function arrayToList(arrayValues) {
  var list = {};
    for (var i = arrayValues.length; i > 0; i--) {


      rest: {
        value: arrayValues.length
      }
    }

    return list;
}


// Reversing an Array
function reverseArray(arrayValues) {

  var storedArray = [];
  var holdArrayValue;
  var lengthArray = arrayValues.length;

  for (var i = 0; i < lengthArray; i++) {

    holdArrayValue = arrayValues.pop();
    storedArray[i] = holdArrayValue;
  }

  return storedArray;

}

// grab last and first and swap them
// leave middle value alone if odd
// swap middle two values if even
//
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// [0, 1, 2, 3, 4, 5, 6, 7, 8]

// [9, 8, 7, 6, 5, 4, 3, 2, 1]

function reverseArrayInPlace(arrayValues) {
  var arrayCount = arrayValues;
  console.log(arrayCount);
  var output = [];

  for (var i = 0; i < arrayValues.length; i++) {
    output[i] = arrayValues[arrayValues.length - 1 - i];
    output[arrayValues.length - 1 - i] = arrayValues[i];
  }

  return console.log(output);
}

// function reverseArrayInPlace(arrayValues) {
//   var arrayLength = arrayValues.length;
//   var storedArray = [];
//   var holdArrayValue;

//   if (arrayLength % 2 === 0) {
//     //even
//     var evenLow = Math.floor(arrayLength / 2 );
//     var evenHigh = Math.floor(arrayLength / 2);

//     for (var i = 0; i < evenLow; i++) {

//       holdArrayValue = arrayValues.pop();
//       storedArray[i] = holdArrayValue;

//     }

//     storedArray[evenLow] = arrayValues[evenLow];
//     storedArray[evenHigh] = arrayValues[evenHigh];
//     arrayValues.pop(evenLow, evenHigh);
//     console.log(arrayValues);

//     //arrayValues.pop();

//     for (var x = ((Math.ceil(arrayLength / 2))); x < arrayLength; x++) {

//       holdArrayValue = arrayValues.pop();
//       storedArray[x] = holdArrayValue;

//     }

//   } else {
//     //odd
//     var odd = Math.floor(arrayLength / 2);

//     for (var i = 0; i < (Math.floor(arrayLength / 2)); i++) {

//       holdArrayValue = arrayValues.pop();
//       storedArray[i] = holdArrayValue;

//     }


//     storedArray[odd] = arrayValues[odd];
//     arrayValues.pop();

//     for (var x = ((Math.floor(arrayLength / 2)) + 1); x < arrayLength; x++) {

//       holdArrayValue = arrayValues.pop();
//       storedArray[x] = holdArrayValue;

//     }

//   }

//   return console.log(storedArray);
//   //return console.log(odd);
//   //return console.log(evenLow + ' ' + evenHigh);

// }


// range(1,10);
function range(start, end, step) {

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
