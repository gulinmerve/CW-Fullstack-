let input  = 14;
let result = decimalToBinary(input);
    

function decimalToBinary(input) {
    let quotient       = 0;
    let remainderArray = [];
    let resultArray    = [];

    if (input) {
        while (input) {
            quotient = parseInt(input / 2);

            remainderArray.push(input % 2);

            input = quotient;
        }
        for (let i = remainderArray.length - 1; i >= 0; i--) {
            resultArray.push(remainderArray[i]); 
        }
        return parseInt(resultArray.join(''));
    } else {
        return `${input} is not a valid input`;
    }
}

console.log(decimalToBinary(input));
