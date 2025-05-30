const path = require('path');
const fs = require('fs')
const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ").concat("\n");

const timestamp = new Date().toISOString();

// console.log('timestamp', timestamp);

const message = `${text} ${timestamp} \n`

console.log(message);
// console.log(text);

if (!message) {
    console.log('❌ Please provide a message log');
    console.log('Example : node index.js Hello world!!');
    process.exit(1)
}

const filePath = path.join(__dirname, 'log.txt');

fs.appendFile(filePath, message, { encoding: 'utf-8' }, () => {
    console.log('Your log added successfully');
})
console.log(filePath);
