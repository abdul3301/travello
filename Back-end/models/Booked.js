const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: String },
    ProductType: { type: String },
    quantity: { type: Number, default: 1 },
    No_of_prople: { type: Number },
    price: { type: Number },
    address: { type: Object },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
