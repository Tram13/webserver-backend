const express = require('express');
const Error404Controller = require('../controllers/Error404Controller');
const router = express.Router();

// error404
router.get('/', Error404Controller.imagesList);

module.exports = router;
