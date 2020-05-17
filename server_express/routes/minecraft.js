const express = require('express');
const minecraftController = require('../controllers/MinecraftController')
const router = express.Router();

// wout
router.get('/', minecraftController.info);

module.exports = router;
