"use strict";
// let add: (x: number, y: number) => number;
// add = (a: number, b: number) => {
//   return a + b;
// };
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
