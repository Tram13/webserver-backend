const express = require('express');
const minecraftController = require('../controllers/MinecraftController');
const router = express.Router();

// minecraft
router.get('/', minecraftController.info);

module.exports = router;
