// 1. synchronous
// (file read) i/o intensive task -> single thread -> will not go to thread pool

// 2. asynchronous
// file read -> single thread -> event loop -> thread pool -> completing the task

// const fs = require('fs');

// console.log('task 1');

// const text = 'Learning File System again';

// fs.writeFileSync('./hello.txt', text);

// console.log('task-3');

// const data = fs.readFileSync('./hello.txt', { encoding: 'utf-8' });

// console.log('task-4');

// console.log(data);

/////////////////////////////////////

const fs = require('fs');

console.log('task-1');

let text = 'node js';

fs.writeFile("./hello-world.txt", text, { encoding: 'utf-8' }, (err) => {
    if (err) {
        console.log('something went wrong', err);
        return;
    }
    console.log('write successfully');
    // console.log('After writing:', data);
})

fs.readFile('./hello-world.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log('something went wrong', err);
        return;
    }
    text = data;

    console.log(text, 'inside callback');
});

console.log(text, 'from console');

console.log('task-3');