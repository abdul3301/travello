const Booked = require("../models/Booked");

//CREATE an BOOKING Order
const createBooking = async (req, res) => {
  const newOrder = new Booked(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateBooking = async (req, res) => {
  try {
    const updatedOrder = await Booked.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = { createBooking };
