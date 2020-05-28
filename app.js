// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const indexRouter = require('./routes');
const cors = require("cors");
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');

//TODO: ook hier werkt de update nog niet
// TODO: Uitzoeken hoe CORS werkt

// Creating express instance
const app = express();

// Set up a whitelist and check against it:
/*const whitelist = ['https://api.tram13.me'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};
*/

// Setting up middleware
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(logger('dev', {}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/express_databank';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

//Get the default connection and
//Bind connection to error event (to get notification of connection errors)
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Redirect all requests with trailing '/' to one without
app.use((req, res, next) => {
    const test = /\?[^]*\//.test(req.url);
    if (req.url.substr(-1) === '/' && req.url.length > 1 && !test)
        res.redirect(301, req.url.slice(0, -1));
    else
        next();
});

// Whitelist of static_images folder
app.use('/static_images', (req, res, next) => {
    if (!isWhitelisted(req)) {
        return res.status(403).end('403 Forbidden')
    } else {
        next()
    }
});

// Enable static serving
app.use('/static_images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules', 'instant.page')));

// Setting Main Router
app.use('/', indexRouter);

// CATCH 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error Handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.status(err.status).json({error: 'Not found'});
});

function isWhitelisted(req) {
    // Will only allow files in /public/images/ ** name in whitelistedImages **
    // Split with "|"
    const whitelistedHome  = "home/friendship.png";
    const whitelistedWout  = "wout/wout_kop1.jpg|wout/wout_kop2.jpg|wout/wout_kop3.png";
    const whitelistedJonas = "jonas/jonas_kop1.png|jonas/jonas_kop2.png";
    const whitelists = [whitelistedHome, whitelistedWout, whitelistedJonas];
    let isWhitelisted = false;
    for (let whitelist of whitelists) {
        const regex = new RegExp("^\/(" + whitelist + ")$");
        if (req.url.match(regex)) {
            isWhitelisted = true
        }
    }
    return isWhitelisted
}

module.exports = app;
