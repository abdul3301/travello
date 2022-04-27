const mongoose = require("mongoose");

const ActivitiesBookingSchema = new mongoose.Schema(
  // Activities Booking

  {
    userId: { type: String },
    dateAndTime: { type: Date, required: true },
    ProductType: { type: String },
    quantity: { type: Number, default: 1 },
    No_of_people: { type: Number },
    price: { type: Number },
    status: { type: String, default: "Success" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("activitiesBooking", ActivitiesBookingSchema);
