// let myFunc: Function;

// myFunc = () => {
//   console.log("hello");
// };

const myFunc = (a: string, b: string, c: string = "true") => {
  console.log(c);
  console.log(`Hello ${a}  ${b}`);
};

myFunc("A", "B");
