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
const amberRouter = require('./amber');
const error404Router = require('./error404');
const archiefRouter = require('./archief/archief');

// Wout-router
router.use('/wout/', woutRouter);

// Jonas-router
router.use('/jonas/', jonasRouter);

// Mira-router
router.use('/mira/', miraRouter);

// Error404-router
router.use('/error404/', error404Router);

// Arnoud-router
router.use('/arnoud/', arnoudRouter);

// Amber-router
router.use('/amber/', amberRouter);

// Home-router
router.use('/home/', homeRouter);

// Minecraft-router
router.use('/minecraft/', minecraftRouter);

// Archief-router
router.use('/archief/', archiefRouter);

// Suggestions-router
router.use('/suggestions/', suggestionsRouter);

// ImageOfDay-router
router.use('/imageOfDay/', imageOfDayRouter);

// Index Page
router.get('/', indexController.index);

module.exports = router;
