// const path = require('node:path');

// const myPath = 'C:/Next-level-dev/mission-3/index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// const os = require('node:os');

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());


// const fs = require('fs');

// fs.writeFileSync('myfile.txt', 'Hello programmers');
// fs.writeFileSync('myfile.txt', 'How are you?');
// fs.appendFileSync('myfile.txt', 'How are you?');
// // const data = fs.readFileSync('myfile.txt');

// fs.readFile('myfile.txt', (err, data) => {
//     console.log(data.toString());
// });

// // console.log(data.toString());
// console.log("hello");


const EventEmitter = require('events');

// const emitter = new EventEmitter();

const School = require('./school')

// register a listener for bellRing event


// raise an events
// setTimeout(() => {
//     emitter.emit('bellRing', {
//         period: 'first',
//         text: 'period ended'
//     });
// }, 2000);

const school = new School();

school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run! because ${period} ${text}`);
})

school.startPeriod();

