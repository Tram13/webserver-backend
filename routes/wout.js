const express = require('express');
const WoutController = require('../controllers/WoutController');
const router = express.Router();

// wout
router.get('/', WoutController.imagesList);

module.exports = router;
