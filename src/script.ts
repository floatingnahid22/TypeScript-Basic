// tuples

let a = [3, "hello", { p: 3 }];
// a[1] = 3 // possible because of not using tuples

let b: [number, string, object] = [4, "world", { t: 1 }];
// b[1] = 3 // cant possible because of tuples
b.push();
