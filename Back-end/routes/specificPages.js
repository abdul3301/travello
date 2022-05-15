// Specific Page Routes

const express = require('express');

const router = express.Router();

const {
  addSpecificPagesData,
  getSpecificPagesData,
} = require('../controllers/specificPages');

router.get('/get', getSpecificPagesData);
router.post('/add', addSpecificPagesData);

module.exports = router;
