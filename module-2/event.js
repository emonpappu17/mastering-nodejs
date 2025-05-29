// const EventEmitter = require('node:events');

// class SchoolBell extends EventEmitter { }

// const schoolBell = new SchoolBell();

// Register an event listener /listen the emit event or event
// schoolBell.on("ring", () => {
//     console.log("Yahoo! Class Sesh!");
// })

// schoolBell.on("ring", () => {
//     console.log("Dhet! Arekta class ache!");
// })

// schoolBell.on("broken", () => {
//     console.log("oh no! class ki ar sesh hobe na!");
// })

// // Emit/Release the event
// schoolBell.emit("ring");
// schoolBell.emit("broken");

/////////////////////////////////////////////////////////////////////

// schoolBell.on('progress', (percent) => {
//     console.log(`Upload progress: ${percent}%`);
// });

// function simulateUpload() {
//     let percent = 0;
//     const interval = setInterval(() => {
//         percent += 20;
//         schoolBell.emit('progress', percent);
//         if (percent === 100) clearInterval(interval);
//     }, 500);
// }

// simulateUpload();



const http = require('http');
const EventEmitter = require('events');

const serverEvents = new EventEmitter();

serverEvents.on('requestReceived', (url) => {
    console.log(`Request made to: ${url}`);
});

const server = http.createServer((req, res) => {
    serverEvents.emit('requestReceived', req.url);
    res.end('Hello World');
});

server.listen(3000);

