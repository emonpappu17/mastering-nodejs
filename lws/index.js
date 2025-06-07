const path = require('node:path');

// const myPath = 'C:/Next-level-dev/mission-3/index.js';
const myPath = 'C:/Next-level-dev/mission-3/lws/index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

const os = require('node:os');

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.constants);
// console.log(os.endianness());
// console.log(os.EOL);
// console.log(os.loadavg());
// console.log(os.networkInterfaces());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());


const fs = require('fs');

// fs.writeFileSync('myfile2.txt', 'Hello programmers');
// fs.writeFileSync('myfile2.txt', 'what are you doing today?');
// // fs.writeFileSync('myfile.txt', 'How are you?');
// fs.appendFileSync('myfile2.txt', 'How are you?');
// const data = fs.readFileSync('myfile2.txt');
// console.log(data.toString());

// fs.readFile('myfile.txt', (err, data) => {
//     console.log(data.toString());
// });

// // console.log(data.toString());
// console.log("hello");


const EventEmitter = require('events');

const emitter = new EventEmitter();

// const School = require('./school')

// register a listener for bellRing event


// raise an events
// setTimeout(() => {
//     emitter.emit('bellRing', {
//         period: 'first',
//         text: 'period ended'
//     });
// }, 2000);

// const school = new School();

// school.on('bellRing', ({ period, text }) => {
//     console.log(`We need to run! because ${period} ${text}`);
// })

// school.startPeriod();

// console.log(arguments.callee.toString());
