const express = require('express');
const router = express.Router();
const indexController = require("../controllers/IndexController")
const woutRouter = require('../routes/wout');
const jonasRouter = require('../routes/jonas');

// Wout-router
router.use('/wout/', woutRouter);

// Wout-router
router.use('/jonas/', jonasRouter);

// Home Page
router.get('/', indexController.index);

module.exports = router;
