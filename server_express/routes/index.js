const express = require('express');
const router = express.Router();
const indexController = require("../controllers/IndexController")
const woutRouter = require('../routes/wout');
const jonasRouter = require('../routes/jonas');
const homeRouter = require('../routes/home')

// Wout-router
router.use('/wout/', woutRouter);

// Jonas-router
router.use('/jonas/', jonasRouter);

// Home-router
router.use('/home/', homeRouter)

// Index Page
router.get('/', indexController.index);

module.exports = router;
