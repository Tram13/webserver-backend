const express = require('express');
const router = express.Router();
const indexController = require("../controllers/IndexController");
const woutRouter = require('./wout');
const jonasRouter = require('./jonas');
const homeRouter = require('./home');
const minecraftRouter = require('./minecraft');
const suggestionsRouter = require('./suggestions');
const imageOfDayRouter = require('./imageOfDay')

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

// ImageOfDay-router
router.use('/imageOfDay/', imageOfDayRouter);

// Index Page
router.get('/', indexController.index);

module.exports = router;
