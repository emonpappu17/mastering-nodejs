const handle = (req, res) => {
    // console.log(req.app.locals.title);
    // console.log(req.app.get('view engine'));
    // console.log(req.accepts("json"));
    // res.send('This is home page')
    // if (req.accepts('html')) {
    //     res.render();
    // } else {
    //     res.send("Hello world")
    // }
    // console.log(req.get('content-type'));
    console.log(req.get('accept'));
    res.send('hello world')
}

module.exports = handle;