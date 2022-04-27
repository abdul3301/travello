const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: String },
    Booking:[
  {
      dateAndTime: { type: Date },
      ProductType: { type: String },
      quantity: { type: Number, default: 1 },
      No_of_people: { type: Number },
      price: { type: Number },
      status: { type: String, default: "pending" },
  }],
});

module.exports = mongoose.model("Booking", BookingSchema);
