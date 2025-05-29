// const var1 = require("./file-2");
const { a, add, b } = require("./file-2");
const { a: a3, add: add3, b: b3 } = require("./file-3.js");

// console.log(var1.add);
// console.log(var1.a);
// console.log(var1.add(1, 3));
console.log(a3);
console.log(add3(1, 3, 4));
console.log(b3);

