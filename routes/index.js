const express = require('express');
const router = express.Router();
const indexController = require("../controllers/IndexController");
const woutRouter = require('./wout');
const jonasRouter = require('./jonas');
const homeRouter = require('./home');
const minecraftRouter = require('./minecraft');
const suggestionsRouter = require('./suggestions');
const imageOfDayRouter = require('./imageOfDay');
const miraRouter = require('./mira');
const arnoudRouter = require('./arnoud');

// Wout-router
router.use('/wout/', woutRouter);

// Jonas-router
router.use('/jonas/', jonasRouter);

// Mira-router
router.use('/mira/', miraRouter);

// Arnoud-router
router.use('/arnoud/', arnoudRouter);

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
