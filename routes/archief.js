const express = require('express');
const ArchiefController = require('../controllers/ArchiefController');
const router = express.Router();

// archief
router.get('/', ArchiefController.fileslist);

// archief/ardennen20200911
router.get('/ardennen20200911/', ArchiefController.ardennen20200911);

module.exports = router;