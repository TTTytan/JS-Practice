(function() {

  function range (start, end) {

    var storedArray = [];

    for (var n = 0; n < 10; n++) {
      storedArray[n] = n + 1;
    }

    return storedArray;

  }

  function sum (array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total = parseInt(array[i]) + parseInt(array[i+1]); 
    }

    return total;

  }

  var test = sum(range(1,10));
  console.log(parseInt(test));

})(); 