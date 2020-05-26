const express = require('express');
const JonasController = require('../controllers/JonasController');
const router = express.Router();

// jonas
router.get('/', JonasController.imagesList);

module.exports = router;
