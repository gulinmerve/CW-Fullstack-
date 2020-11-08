const myFunction = (myString, myLetter) => 
console.log(myString.split(myLetter).length - 1)
myFunction('clarusway', 'a')
// // function toObject(arr) {
// //     var rv = {};
// //     for (var i = 0; i < arr.length; ++i)
// //       if (arr[i] !== undefined) rv[i] = arr[i];
// //     return rv;
// //   }

// //   console.log(toObject([1,2,2,3,4,4,]));

// // let myArray= ["clarusway","google", "adobe", "cisco", "space-x" ,"clarusway", "cisco", "clarusway","facebook", "google", "clarusway"]
// // .reduce(function (acc, curr) {
// //     if (typeof acc[curr] == 'undefined') {
// //       acc[curr] = 1;
// //     } else {
// //       acc[curr] += 1;
// //     }
  
// //     return acc;
// //   }, {});
  
// //   console.log(myArray)
// //   // a == {2: 5, 4: 1, 5: 3, 9: 1}

// // let myarray = ["clarusway","google", "adobe", "cisco", "space-x" ,"clarusway", "cisco", "clarusway","facebook", "google", "clarusway"];
// // result = { };
// // for(var i = 0; i < myarray.length; ++i) {
// //     if(!result[myarray[i]])
// //         result[myarray[i]] = 0;
// //     ++result[myarray[i]];
// // }

// // console.log(result)

// // let myarray = ["clarusway","google", "adobe", "cisco", "space-x" ,"clarusway", "cisco", "clarusway","facebook", "google", "clarusway"];
// // const c = a => a.reduce((p, c) => (p[c] = ++p[c] || 1, p), {});
// // console.log(c(myArray))
// let myArray = ["clarusway","google", "adobe", "cisco", "space-x" ,"clarusway", "cisco", "clarusway","facebook", "google", "clarusway"];
// // const c = a => a.reduce((p, c) => (p[c] = ++p[c] || 1, p), {});
// var myObj={}
// var count = 0;
// for (i=0; i<myArray.length;i++){
//   for (x=0;x<myArray.length;x++){
//     if (myArray[i] === myArray[x]){
//       count++;
//     }
//   }
//   myObj[myArray[i]]= count;
//   count =0;
// }

// console.log(myArray)



// let myArray = ["clarusway","google", "adobe", "cisco", "space-x" ,"clarusway", "cisco", "clarusway","facebook", "google", "clarusway"];
// result = {};
// for(let i = 0; i < myArray.length; ++i) {
//     if(!result[myArray[i]]) result[myArray[i]] = 0;
//     ++result[myArray[i]];
// }

// console.log(result);
// const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// const aCount = new Map([...new Set(a)].map(
//     x => [x, a.filter(y => y === x).length]
// ));

// console.log(aCount)

// let myArray = ["clarusway","google", "adobe", "cisco", "space-x" ,"clarusway", "cisco", "clarusway","facebook", "google", "clarusway"];
// result = {};
// for(let i = 0; i < myArray.length; ++i) {
//     (!result[myArray[i]] ? result[myArray[i]] = 0 : ++result[myArray[i]]);
// }

// console.log(result);

// var x = null ?? "Ravin"
// var y = 1 ?? "Hi"

// console.log(y, x)







