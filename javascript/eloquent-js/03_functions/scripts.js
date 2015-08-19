'use strict';
(function() {
  //creates an 8x8 board

  // var yDimensions = 8;
  // var xDimensions = 8;

  // for (var y = 0; y < yDimensions; y++) {

  //   var output = '';

  //   for (var x = 0; x < xDimensions; x++) {

  //     if ((x+y) % 2 === 0) {
  //       output += ' ';
  //     } else {
  //       output += '#';
  //     }

  //   }

  //   console.log(output);

  // }
  
  //now lets try to make this using recursion: function callings itself
  
  //board(8,8);

  function board(x, y) {

    var output = '';
    output += '#';

    if (x == 0 && y == 0) {
      return console.log('Done.');
    } else {
      return board(x-1, y-1);
    }

  }

//console.log(min(0,10));

function min (n1, n2) {

  if (n1 !== n2) {
    if (n1 < n2) {
      return n1;
    } else {
      return n2;
    }
  } else {
    return 'Error: values are equal';
  }

}

function isEven (number) {

  if (number % 2 === 0) {
    return true;
  } else if(number % 2 === 1) {
    return false;
  } else {
    if(number < 0) { // if a negative number - prevents stack overload - Infinity loop
      return isEven((number * -1) + 2);
    } else {
      return isEven(number - 2);
    }
  }

}

function countBs (string) {

  // var count = 0;

  // for (var pos = 0; pos < string.length; pos++) {
  //   if(string.charAt(pos) === 'B') {
  //     count += 1;
  //   }
  // }

  // return count;
  
  return countChar(string, 'B');

}

function countChar (string, character) {

  var count = 0;

  for (var pos = 0; pos < string.length; pos++) {
    if(string.charAt(pos) === character) {
      count += 1;  
    }
  }

  return count;

}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak','k'));

})();

