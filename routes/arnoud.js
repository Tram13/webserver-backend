const express = require('express');
const ArnoudController = require('../controllers/ArnoudController');
const router = express.Router();

// arnoud
router.get('/', ArnoudController.imagesList);

module.exports = router;
