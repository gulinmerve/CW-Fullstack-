let binStr = "1110";
let value = 0 ;
function bin2dec(binStr) {
  for (let i = 0; i < binStr.length; i++) {
    let currNum = binStr[binStr.length - i - 1];
    // console.log(currNum)
    value = value + 2 ** i * currNum
    console.log(value)
  }
  return value;
}
console.log(bin2dec(binStr));