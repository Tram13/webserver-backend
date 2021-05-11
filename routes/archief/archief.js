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

// archief/videoWebm
router.get('/videoWebm/', ArchiefController.stuurVideoWebm);

// archief/videoMov
router.get('/videoMov/', ArchiefController.stuurVideoMov);

// archief/videoMp4
router.get('/videoMp4/', ArchiefController.stuurVideoMp4);

// archief/videoHLS
router.get('/videoHLS/', ArchiefController.stuurVideoHLS);

module.exports = router;
