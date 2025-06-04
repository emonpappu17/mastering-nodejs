const handle = (req, res) => {
    // console.log(req.app.locals.title);
    console.log(req.app.get('view engine'));
    res.send('This is home page')
}

module.exports = handle;