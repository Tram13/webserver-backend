const express = require('express');
const router = express.Router();

// wout
router.get('/', function(req, res) {
    res.json({
        message: "wout page",

    })
});

module.exports = router;
