const express = require('express');
const AmberController = require('../controllers/AmberController');
const router = express.Router();

// amber
router.get('/', AmberController.imagesList);

module.exports = router;
