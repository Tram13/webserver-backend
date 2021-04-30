const express = require('express');
const ArchiefController = require('../../controllers/archief/ArchiefController');
const Ardennen20200911Router = require('./ardennen20200911');
const router = express.Router();

// archief
router.get('/', ArchiefController.archivelist);

// archief/ardennen20200911
router.use('/ardennen20200911/', Ardennen20200911Router);

// archief/file
router.get('/file/', ArchiefController.stuurFile);

// archief/video
router.get('/video/', ArchiefController.stuurVideo);

module.exports = router;
