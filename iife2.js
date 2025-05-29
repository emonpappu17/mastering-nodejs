
let a = 10;
(
    (name) => {
        let a = 10; // block scope
        console.log(`Learning ${name}`);
    }
)("node")

console.log('global', global);
console.log('module', module);
console.log('__dirname', __dirname);
console.log('__filename', __filename);