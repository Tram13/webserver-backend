const express = require('express');
const Ardennen20200911Controller = require('../../controllers/archief/Ardennen20200911Controller');
const router = express.Router();

// archief/ardennen20200911
router.get('/', Ardennen20200911Controller.fileslist);

router.get('/photos/', Ardennen20200911Controller.photos);

module.exports = router;
