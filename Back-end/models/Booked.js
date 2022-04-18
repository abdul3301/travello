const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: String },
    ProductType: { type: String },
    quantity: { type: Number, default: 1 },
    No_of_people: { type: Number },
    price: { type: Number},
    status: { type: String, default: "pending" },      
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
