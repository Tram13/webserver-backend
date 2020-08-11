const express = require('express');
const MiraController = require('../controllers/MiraController');
const router = express.Router();

// mira
router.get('/', MiraController.imagesList);

module.exports = router;
