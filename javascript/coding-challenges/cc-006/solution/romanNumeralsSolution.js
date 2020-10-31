const roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
function toRoman(n) {
  return Object.keys(roman)
    .map((key) => {
      let res = "";
      while (n >= roman[key]) {
        res += key;
        n -= roman[key];
      }
      return res;
    })
    .join("");
}

console.log(toRoman(457));
