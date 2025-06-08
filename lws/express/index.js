// const express = require('express')
// const handle = require('./handle')
// const app = express()

// app.set('view engine', 'ejs');

// const admin = express();

// admin.on('mount', (parent) => {
//     console.log('Admin Mounted')
//     console.log(parent) // refers to the parent app
// })

// app.use(express.static(`${__dirname}/public/`, {
//     index: 'home.html'
// }))

// app.use(express.Router());

// const router = express.Router({ caseSensitive: true });

// app.use(router)

// router.get('/', (req, res) => {
//     res.send('This is home page')
// })

// app.locals.title = "My App";

// app.get('/', handle)

// admin.get('/dashboard', (req, res) => {
//     console.log(admin.mountpath);
//     res.send("welcome to admin dashboard")
// })

// app.enable('case sensitive routing')

// app.param('id', (req, res, next, id) => {
//     const user = {
//         userId: id,
//         name: 'Ronaldo'
//     }
//     req.userDetails = user;
//     next();
// });

// app.get('/user/:id', (req, res) => {
//     console.log(req.userDetails);
//     res.send('this is bangladesh home')
// })

// app.all('/about', (req, res) => {
//     res.send('this is all method')
// })

// app.use('/admin', admin);


// app.post('/', (req, res) => {
//     res.send('This is the post request')
// })

// app.route('/about/mission')
//     .get((req, res) => {
//         res.render('pages/about')
//     })
//     .post((req, res) => {
//         res.send('welcome to application home post')
//     })
//     .put((req, res) => {
//         res.send('welcome to application home put')
//     })

// app.listen(3000, () => {
//     console.log('listing on port 3000');
// })

///////////////////////////////////////////////////////// lws -> lecture 18

// const express = require('express')
// const cookieParser = require('cookie-parser')
// const handle = require('./handle')

// const app = express()
// app.use(cookieParser())

// const adminRoute = express.Router();

// adminRoute.get('/dashboard', (req, res) => {
//     console.log(req.hostname);
//     res.send("We are is Admin Dashboard");
// })

// app.use('/admin', adminRoute);

// app.get('/user/:id', handle)

// app.post('/user/', (req, res) => {
//     console.log(req.route);
//     res.send('Hello world post')
// })

// app.get('/user/', (req, res) => {
//     console.log(req.route);
//     res.send('Hello world get')
// })

// app.listen(3000, () => {
//     console.log('listing on port 3000');
// })


////////////////////////////////////////////////////// lws -> lecture 19

// const { name } = require('ejs');
// const express = require('express')

// const app = express()

// app.set('view engine', 'ejs');

// app.get('/about', (req, res) => {
//     console.log(res.headersSent
//     );
//     res.render('pages/about', {
//         name: 'Bangladesh'
//     })
//     console.log(res.headersSent);
// })

// app.get('/test', (req, res) => {
//     res.send('Hello')
// });

// app.get('/about', (req, res) => {
//     // res.json({
//     //     name: "Ronaldo"
//     // })
//     //res.status(200); // status pathanor por obosoi res end() korte hobe
//     // res.end();
//     // res.sendStatus(403);

//     // res.format({
//     //     'text/plain': () => {
//     //         res.send('hi i am plain text')
//     //     },
//     //     'text/html': () => {
//     //         res.render('pages/about', {
//     //             name: 'Ankara Messi'
//     //         })
//     //     },
//     //     'application/json': () => {
//     //         res.json({
//     //             message: 'i am json content'
//     //         })
//     //     },
//     //     default: () => {
//     //         res.status(406).send('Not acceptable')
//     //     }
//     // })

//     // res.cookie('name', 'learnwithsumit');
//     // res.location('/test')
//     // res.redirect('/test')

//     res.set('Platform', 'Learn with Sumit'); // response a header set kora jay 
//     console.log(res.get('Platform')); // response a header get kora jay
//     res.end();
// })

// app.listen(3000, () => {
//     console.log('listing on port 3000');
// })

////////////////////////////////////////////// lws -> lecture 20

// const express = require("express");
// const cookieParser = require('cookie-parser')
// const app = express();

// app.use(cookieParser())
// app.use(express.json()); //build in middleware

// const adminRouter = express.Router();

// const loggerWrapper = (options) => {
//     return function (req, res, next) {
//         if (options.log) {
//             console.log(
//                 `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`
//             );
//             next();
//         } else {
//             throw new Error('Failed to log');
//         }
//     }
// }

// // const logger = (req, res, next) => {
// //     console.log(
// //         `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`
// //     );
// //     // res.end();
// //     // next('text'); // error lobe dorbe and client a jei text lekha hobe setai dekhabe
// //     next();
// //     // throw new Error('This is an error');
// // }

// // adminRouter.use(logger);
// adminRouter.use(loggerWrapper({ log: false }));

// adminRouter.get('/dashboard', (req, res) => {
//     res.send('Dashboard');
// })

// // const myMiddleware2 = (req, res, next) => {
// //     console.log('I am logging 2');
// //     next();
// // }

// // app.use(myMiddleware1, myMiddleware2);
// // app.use(myMiddleware2);


// app.use('/admin', adminRouter);

// app.get('/about', (req, res) => {
//     res.send('about')
// })

// const errorMiddleware = (err, req, res, next) => { // ai 4ta prams thakle express auto buje jabe ati error handling middleware
//     console.log(err.message);
//     res.status(500).send('There was a server side error!')
// }

// adminRouter.use(errorMiddleware)

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// })

///////////////////////////////////////////////// lws -> lecture 21

const express = require('express');
const adminRoute = require('./adminRouter')
const publicRouter = require('./publicRouter');

const app = express();

app.use('/admin', adminRoute);
app.use('/', publicRouter);

app.listen(3000, () => {
    console.log('listing on port 3000');
})