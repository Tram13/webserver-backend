const express = require('express');
const homeController = require('../controllers/HomeController')
const router = express.Router();

// home
router.get('/', homeController.imagesList);

module.exports = router;