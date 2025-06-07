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

const { name } = require('ejs');
const express = require('express')

const app = express()

app.set('view engine', 'ejs');

// app.get('/about', (req, res) => {
//     console.log(res.headersSent
//     );
//     res.render('pages/about', {
//         name: 'Bangladesh'
//     })
//     console.log(res.headersSent);
// })

app.get('/test', (req, res) => {
    res.send('Hello')
});

app.get('/about', (req, res) => {
    // res.json({
    //     name: "Ronaldo"
    // })
    //res.status(200); // status pathanor por obosoi res end() korte hobe
    // res.end();
    // res.sendStatus(403);

    // res.format({
    //     'text/plain': () => {
    //         res.send('hi i am plain text')
    //     },
    //     'text/html': () => {
    //         res.render('pages/about', {
    //             name: 'Ankara Messi'
    //         })
    //     },
    //     'application/json': () => {
    //         res.json({
    //             message: 'i am json content'
    //         })
    //     },
    //     default: () => {
    //         res.status(406).send('Not acceptable')
    //     }
    // })

    // res.cookie('name', 'learnwithsumit');
    // res.location('/test')
    // res.redirect('/test')

    res.set('Platform', 'Learn with Sumit'); // response a header set kora jay 
    console.log(res.get('Platform')); // response a header get kora jay
    res.end();
})

app.listen(3000, () => {
    console.log('listing on port 3000');
})