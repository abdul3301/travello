const SpecificPagesData = require('../models/specificPages');

// Add Specific Pages Data
const addSpecificPagesData = async (req, res) => {
  const { image, description, aboutActivity, advisory } = req.body;
  try {
    const specificPagesData = new SpecificPagesData({
      image,
      description,
      aboutActivity,
      advisory,
    });
    const newSpecificPagesData = await specificPagesData.save();
    res.status(201).json({
      status: 'success',
      data: {
        specificPagesData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Get Specific Pages Data
const getSpecificPagesData = async (req, res) => {
  try {
    const specificPagesData = await SpecificPagesData.find();
    res.status(200).json({
      status: 'success',
      results: specificPagesData.length,
      data: {
        specificPagesData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Export Module
module.exports = { addSpecificPagesData, getSpecificPagesData };
