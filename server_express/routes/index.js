const express = require('express');
const router = express.Router();
const woutRouter = require('../routes/wout');

// Home Page
router.get('/', function(req, res) {
    res.json({message: "main page"})
});

// Wout-router
router.use('/wout/', woutRouter);

module.exports = router;
