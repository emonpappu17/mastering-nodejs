// const var1 = require("./file-2");
// const { a, add, b } = require("./file-2");
import { a, b } from "./file-2.mjs";
// import add6 from "./file-2.mjs" // export default deyay jekono name deya baje add ke

import add6 from "./file-2.mjs"
// const { a: a3, add: add3, b: b3 } = require("./file-3.js");
import { a as A3, b as B3, add as ADD3 } from "./file-3.mjs";

// console.log(var1.add);
// console.log(var1.a);
// console.log(var1.add(1, 3));
// console.log(A3);
// console.log(ADD3(1, 3, 4));
// console.log(B3);


// console.log(add6(2, 2));
console.log(add6.c);
