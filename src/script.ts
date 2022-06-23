// variable
// let a: string | number;
let a: string; // : means types bole deya

// array

// let b: string[] = [];

// // b.push(3); //it will give error
// b.push("nahid");

let b: (string | number)[] = [];

b.push("nahid", 5);
console.log(b);

// object

let c: object;

c = {
  name: "nahid", // whatever object we want to put it won't give error
};

// if we want to specify this object

let d: {
  name: string;
  age: number;
};
