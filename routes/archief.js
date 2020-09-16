const express = require('express');
const ArchiefController = require('../controllers/ArchiefController');
const router = express.Router();

// archief
router.get('/', ArchiefController.fileslist);

module.exports = router;
