// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const indexRouter = require('./routes/index');
const cors = require("cors");

// Creating express instance
const app = express();

// Setting up middleware
app.use(cors());
app.use(logger('dev', {}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Redirect all requests with trailing '/' to one without
app.use((req, res, next) => {
    const test = /\?[^]*\//.test(req.url);
    if (req.url.substr(-1) === '/' && req.url.length > 1 && !test)
        res.redirect(301, req.url.slice(0, -1));
    else
        next();
});

// Whitelist of static folder
app.use('/static_images', (req, res, next) => {
    if (!isWhitelisted(req)) {
        return res.status(403).end('403 Forbidden')
    } else {
        next()
    }
})

// Enable static serving
app.use('/static_images', express.static(path.join(__dirname, 'public', 'images')));

// Setting Main Router
app.use('/', indexRouter);

// CATCH 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error Handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.format({
        'application/json': function () {
            res.status(err.status).json({error: 'Not found'});
        }
    });
});

function isWhitelisted(req) {
    // Will only allow files in /public/images/ ** name in whitelistedImages **
    // Split with "|"
    const whitelistedRoot = "friendship.png|uwma.png"
    const whitelistedWout = "wout/wout_kop1.jpg|wout/wout_kop2.jpg|wout/wout_kop3.png"
    const whitelists = [whitelistedRoot, whitelistedWout]
    let isWhitelisted = false
    for (let whitelist of whitelists) {
        const regex = new RegExp("^\/(" + whitelist + ")$")
        if (req.url.match(regex)) {
            isWhitelisted = true
        }
    }
    return isWhitelisted
}

module.exports = app;
