const express = require('express');
const imageOfDayController = require('../controllers/ImageOfDayController');
const router = express.Router();

// images of day
router.get('/', imageOfDayController.imagesList);

module.exports = router;