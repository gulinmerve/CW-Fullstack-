<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# JS-CC-006 : Roman Numerals

- Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

- Example

```
1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII
```

## Learning Outcomes

At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.

- Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

## Problem Statement

- Write a function that takes normal number(` 8, 148, 457` ) and convert to Roman Numerals(` VIII, CXLVIII, CDLVII` )

- Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

  #### JavaScript Solution

  ```javascript
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
  ```

  #### Python Solution

  ```python
  configuration = {
  	1000: "M",
  	900: "CM",
  	500: "D",
  	400: "CD",
  	100: "C",
  	90: "XC",
  	50: "L",
  	40: "XL",
  	10: "X",
  	9: "IX",
  	5: "V",
  	4: "IV",
  	1: "I"
  }
  
  def numeral(number):
  	roman = []
  	for size in sorted(configuration,reverse=True):
  		qty = int(number / size)
  		number = number % size
  		roman.append(configuration[size] * qty)
  	return "".join(roman)
  
  print(numeral(148))
  ```

  

**<p align="center">&#9786; Happy Coding &#9997;</p>**