(function() {

// var row = '';
// var size = 8;
//
//   for (var i = 0; i < (size * size); i++) {
//
//       if (i % 2 === 0) {
//         row += ' ';
//       } else {
//         row += '#';
//       }
//
//       if (i % size === 0) {
//         row += '\n';
//       }
//       if (i % (size * 2) === 0) {
//         row += ' ';
//       }
//   }
//   console.log(row);
 var board = '';
 var size = 21;

  // make 8 x 8 square first
  for (var y = 0; y < size; y++) { // 8 rows down
    for (var x = 0; x < size; x++) { // 8 columns across
      if ((x + y) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }

    board += '\n';
  }
  console.log(board);
})();
