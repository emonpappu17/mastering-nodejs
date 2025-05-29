var mango = 55;
const a = 10;

const add = (param1, param2) => param1 + param2

const b = 20

const c = 44;

// module.exports = add;
export {
    a,
    // add,
    b
};

// export default add
export default {
    add,
    c
}

// console.log(module);




// console.log(global);
// console.log(__dirname);
// console.log(mango);