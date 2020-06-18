const express = require('express');
const imageOfDayController = require('../controllers/ImageOfDayController');
const router = express.Router();

// images of day
router.get('/', imageOfDayController.imagesList);

// r/earthporn
router.get('/earthporn', imageOfDayController.earthPorn);

module.exports = router;