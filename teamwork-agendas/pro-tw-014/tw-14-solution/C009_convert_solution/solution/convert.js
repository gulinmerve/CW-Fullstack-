let binStr = "1100";


function bin2dec(binStr) {
  var decVal = +0;
  var bits = +1;
  for (var i = 0; i < binStr.length; i++) {
    var currNum = +binStr[binStr.length - i - 1];
    if (currNum === 1) {
      decVal += bits;
    }
    bits *= 2;
  }
  return decVal;
}

console.log(bin2dec(binStr));



// let decNum= 14;

// function dec2bin(decNum) {
//   if (decNum == 0) return "0";

//   var binVal = "";
//   while (decNum != 0) {
//     binVal += +decNum % 2;
//     console.log(decNum >>= 1);
//     // console.log(object)
//   }
//   return binVal.split("").reverse().join("");
// }

// console.log(dec2bin(decNum));

// /* *** Tests ***   */

// var desc = "with zero";
// var input = "0";
// var actual = bin2dec(input);
// var expected = 0;
// assertEqual(actual, expected, desc);

// desc = "with 00011110 should be 30";
// input = "00011110";
// actual = bin2dec(input);
// expected = 30;
// assertEqual(actual, expected, desc);

// desc = "with 00101010 should be 42";
// input = "00101010";
// actual = bin2dec(input);
// expected = 42;
// assertEqual(actual, expected, desc);

// desc = "with zero";
// input = 0;
// actual = dec2bin(input);
// expected = "0";
// assertEqual(actual, expected, desc);

// desc = "with 30 should be 11110";
// input = 30;
// actual = dec2bin(input);
// expected = "11110";
// assertEqual(actual, expected, desc);

// desc = "with 42 should be 101010‬";
// input = 42;
// actual = dec2bin(input);
// expected = "101010";
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }
