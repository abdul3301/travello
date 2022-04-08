const express = require('express');

const router = express.Router();

const {
  addActivitiesData,
  getAllActivitiesData,
} = require('../controllers/activitiesData');

router.get('/activities/getActivities', getAllActivitiesData);
router.post('/activities/addActivities', addActivitiesData);

module.exports = router;
