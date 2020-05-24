const express = require('express');
const router = express.Router();
const indexController = require("../controllers/IndexController");
const woutRouter = require('../routes/wout');
const jonasRouter = require('../routes/jonas');
const homeRouter = require('../routes/home');
const minecraftRouter = require('../routes/minecraft');
const suggestionsRouter = require('../routes/suggestions');

// Wout-router
router.use('/wout/', woutRouter);

// Jonas-router
router.use('/jonas/', jonasRouter);

// Home-router
router.use('/home/', homeRouter);

// Minecraft-router
router.use('/minecraft/', minecraftRouter);

// Suggestions-router
router.use('/suggestions/', suggestionsRouter);

// Index Page
router.get('/', indexController.index);

module.exports = router;
