const Booked = require('../models/Booked');

// CREATE an BOOKING Order
const createBooking = async (req, res) => {
  const newOrder = new Booked(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
const findBookingOrder = async (req, res) => {
  try {
    const orders = await Booked.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
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

// DELETE
const deleteOrder = async (req, res) => {
  try {
    await Booked.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET USER ORDERS
const getBookingOrderByeUserID = async (req, res) => {
  try {
    const orders = await Booked.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createBooking,
  updateBooking,
  deleteOrder,
  getBookingOrderByeUserID,
  findBookingOrder,
};
