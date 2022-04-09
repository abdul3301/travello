const express = require('express');

const router = express.Router();

const { addEventData, getAllEventData } = require('../controllers/eventData');

router.get('/events/getEvents', getAllEventData);
router.post('/events/addEvent', addEventData);

module.exports = router;
