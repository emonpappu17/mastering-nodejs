const express = require('express');

const publicRouter = express.Router();

// const log = (req, res, next) => {
//     console.log('I am logging something!');
//     next();
// }

// publicRouter.all('{*splat}', log);

// publicRouter.param('user', (req, res, next, id) => {
//     console.log(`got the ${id}`);
//     req.user = id === '1' ? 'Admin' : 'Anonymous';
//     next();
// })

// publicRouter.param((param, option) => (req, res, next, val) => { // deprecated
//     if (val === option) {
//         next();
//     } else {
//         res.sendStatus(403)
//     }
// });

// publicRouter.param(function (param, option) { // deprecated
//     return function (req, res, next, val) {
//         if (val === option) {
//             next()
//         } else {
//             res.sendStatus(403)
//         }
//     }
// })

// Param middleware factory
// const paramValidator = (option) => {
//     return (req, res, next, val) => {
//         if (val === option.toString()) {
//             next();
//         } else {
//             res.sendStatus(403);
//         }
//     };
// };

// Apply paramValidator to 'user' param
// publicRouter.param('user', paramValidator(12));

// // publicRouter.param('user', '12');

// publicRouter.get('/:user', (req, res) => {
//     res.send('hello admin')
// })

// publicRouter.get('/:user', (req, res) => {
//     console.log('am i called?');
//     res.send(`Hello ${req.user}`)
// })

// publicRouter.get('/about', (req, res) => {
//     res.send(`Hello about`)
// })

// publicRouter
//     .route('/user')
//     .all((req, res, next) => {
//         console.log('I am logging something');
//         next();
//     })
//     .get((req, res) => {
//         res.send('GET');
//     })
//     .post((req, res) => {
//         res.send('POST')
//     })
//     .put((req, res) => {
//         res.send('PUT')
//     })
//     .delete((req, res) => {
//         res.send('DELETE')
//     })


publicRouter.use((req, res, next) => {
    console.log('Logging');
    next();
})


module.exports = publicRouter;