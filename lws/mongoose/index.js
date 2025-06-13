const express = require("express");
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler')

const app = express();
app.use(express.json());

// database connection with mongoose
mongoose.connect('mongodb://localhost/todos')
    .then(() => console.log('connection successful'))
    .catch(err => console.log(err))

app.use('/todo', todoHandler);

// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.headerSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}

app.listen(3000, () => {
    console.log('app listening at port 3000');
})