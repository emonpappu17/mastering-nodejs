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

// const express = require('express');
// const adminRoute = require('./adminRouter')
// const publicRouter = require('./publicRouter');

// const app = express();

// app.use('/admin', adminRoute);
// app.use('/', publicRouter);

// app.listen(3000, () => {
//     console.log('listing on port 3000');
// })

////////////////////////////////// lws -> lecture 22

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     // res.send('Hello world');
//     // throw new Error("there was an error!");
//     // res.send(a)

//     for (let i = 0; i <= 10; i++) {
//         if (i === 5) {
//             next('there was an error!')
//         } else {
//             res.write('a');
//         }
//     }
//     res.end();
// })

// // 404 error handler
// app.use((req, res, next) => { // ulta plata url diya client side diya try korle ai middleware ta fire hobe
//     // res.send("Request url was not found!")
//     next("Request url was not found!")
// })

// app.use((err, req, res, next) => { // synchoranus code a server side error hobe aita run hobe.  ai middleware sobar seshe dite hobe
//     // console.log(err);
//     // res.send('There was an error!')

//     // if (err.message) {
//     //     res.status(500).send(err.message);
//     // } else {
//     //     res.status(500).send('There was an error!')
//     // }

//     if (res.headersSent) {
//         next('There was a problem!'); // invisible error handler er kase chole jay
//     } else {
//         if (err.message) {
//             res.status(500).send(err.message);
//         } else {
//             res.send("There was an error!")
//         }
//     }
// })

// invisible default error handler
// app.use((err, req, res, next) => {
//     // handle error here
// })

// app.listen(3000, () => {
//     console.log('app listening at port 3000');
// })


// const express = require("express");
// const fs = require('fs');
// const app = express();

// app.get('/', [
//     (req, res, next) => {
//         // fs.readFile("/file-does-not-exist", (err, data) => {
//         //     if (err) {
//         //         next(err); // next call kora mane direct invisible error handler er kase chole jabe
//         //     } else {
//         //         res.send(data);
//         //     }
//         // })

//         // setTimeout(() => {
//         //     try {
//         //         console.log(a);
//         //     } catch (err) {
//         //         next(err); // next call kora mane direct invisible error handler er kase chole jabe
//         //     }
//         //     // console.log(a); // server crash korbe
//         // }, 100);

//         fs.readFile("/file-does-not-exist", 'utf-8', (err, data) => {
//             console.log(data);
//             next(err)
//             // console.log(data.property); // server crash korbe
//         })
//     },
//     (req, res, next) => {
//         console.log('knk nk');
//         console.log(data.property);
//     }
// ])

// app.use((req, res, next) => {
//     console.log('I am not called!');
//     next();
// })

// // custom error handler
// app.use((err, req, res, next) => {
//     if (res.headersSent) {
//         next('There was a problem!'); // invisible error handler er kase chole jay
//     } else {
//         if (err.message) {
//             res.status(500).send(err.message);
//         } else {
//             res.send("There was an error!")
//         }
//     }
// })

// app.listen(3000, () => {
//     console.log('app listening at port 3000');
// })

///////////////////////////////////////////// lws -> lecture 23

const express = require('express');
const multer = require("multer");
const path = require("path")

// console.log(path.extname);

// File upload folder
const UPLOADS_FOLDER = "./uploads";

// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        // Important File.pdf => important-file-1345134634.pdf
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExt, "")
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    }
})

// prepare the final multer upload object
const upload = multer({
    // dest: UPLOADS_FOLDER,
    storage: storage,
    // limits: {
    //     fileSize: 1000000 // 1MB
    // },
    fileFilter: (req, file, cb) => {
        // console.log(file);
        if (file.fieldname === "avatar") {
            if (
                file.mimetype === "image/png" ||
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/jpeg"
            ) {
                cb(null, true);
            } else {
                // cb(null, false);
                cb(new Error("Only jpg .png or .jpeg format allowed!"));
            }
        } else if (file.fieldname === "doc") {
            console.log('called');
            if (file.mimetype === "application/pdf") {
                cb(null, true);
            } else {
                cb(new Error("Only .pdf format allowed!"));
            }
        } else {
            cb(new Error("There was an unknown error!"))
        }
    }
});

const app = express();

// app.post('/', upload.single('avatar'), (req, res) => {
//     res.send('Hello world')
// })

// app.post('/', upload.array('avatar', 3), (req, res) => {
//     res.send('Hello world')
// })

// const uploadMiddleware = upload.fields([
//     { name: 'avatar', maxCount: 1 },
//     { name: 'gallery', maxCount: 3 }
// ])

const uploadMiddleware = upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'doc', maxCount: 1 }
])

// app.post('/', uploadMiddleware, (req, res) => {
//     res.send('Hello world')
// })

// application route
app.post('/', uploadMiddleware, (req, res) => {
    console.log(req.files);
    res.send('Hello world')
})

// app.post('/', upload.none(), (req, res) => {
//     res.send('Hello world')
// })

// default error handler
app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error!');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send("success");
    }
})

app.listen(3000, () => {
    console.log('app listening at port 3000');
})