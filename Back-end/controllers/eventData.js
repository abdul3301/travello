const EventData = require('../models/eventsData');

// Add Event Data
const addEventData = async (req, res) => {
  const { image, title, subTitle, cost, location } = req.body;
  try {
    const eventData = new EventData({
      image,
      title,
      subTitle,
      cost,
      location,
    });
    const newEventData = await eventData.save();
    res.status(201).json({
      status: 'success',
      data: {
        eventData,
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
const getAllEventData = async (req, res) => {
  try {
    const eventData = await EventData.find();
    res.status(200).json({
      status: 'success',
      results: eventData.length,
      data: {
        eventData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = { addEventData, getAllEventData };
