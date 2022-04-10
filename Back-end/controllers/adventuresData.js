const AdventuresData = require('../models/adventuresData');

// Add Event Data
const addAdventuresData = async (req, res) => {
  const { image, title, subTitle, cost, activity, href } = req.body;
  try {
    const adventuresData = new AdventuresData({
      image,
      title,
      subTitle,
      cost,
      activity,
      href,
    });
    const newAdventuresData = await adventuresData.save();
    res.status(201).json({
      status: 'success',
      data: {
        adventuresData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Get Adventures Data
const getAdventuresData = async (req, res) => {
  try {
    const adventuresData = await AdventuresData.find();
    res.status(200).json({
      status: 'success',
      results: adventuresData.length,
      data: {
        adventuresData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = { addAdventuresData, getAdventuresData };
