const express = require('express');
const ArchiefController = require('../controllers/ArchiefController');
const router = express.Router();

// archief
router.get('/', ArchiefController.ardennen20200911);

module.exports = router;
