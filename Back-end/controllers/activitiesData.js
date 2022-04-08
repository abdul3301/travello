const ActivitiesData = require('../models/activitiesData');

// Add Event Data
const addActivitiesData = async (req, res) => {
  const { image, title, subTitle, cost, duration, href } = req.body;
  try {
    const activitiesData = new ActivitiesData({
      image,
      title,
      subTitle,
      cost,
      duration,
      href,
    });
    const newActivitiesData = await activitiesData.save();
    res.status(201).json({
      status: 'success',
      data: {
        activitiesData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Get All Event Data
const getAllActivitiesData = async (req, res) => {
  try {
    const activitiesData = await ActivitiesData.find();
    res.status(200).json({
      status: 'success',
      results: activitiesData.length,
      data: {
        activitiesData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = { addActivitiesData, getAllActivitiesData };
