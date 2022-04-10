const express = require('express');

const router = express.Router();

const {
  addAdventuresData,
  getAdventuresData,
} = require('../controllers/adventuresData');

router.get('/adventures/getAdventures', getAdventuresData);
router.post('/adventures/addAdventure', addAdventuresData);

module.exports = router;
