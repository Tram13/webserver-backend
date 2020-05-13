const express = require('express');
const router = express.Router();
const indexController = require("../controllers/IndexController")
const woutRouter = require('../routes/wout');

// Wout-router
router.use('/wout/', woutRouter);

// Home Page
router.get('/', indexController.index);

module.exports = router;
