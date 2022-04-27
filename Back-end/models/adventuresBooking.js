const mongoose = require("mongoose");

const AdventuresBookingSchema = new mongoose.Schema(
  // Adventures Booking
  {
    userId: { type: String },
    dateAndTime: { type: Date, required: true },
    AdventureType: { type: String },
    AdventuresBooking: [
      {
        ProductType: { type: String },
        quantity: { type: Number, default: 1 },
        No_of_people: { type: Number },
        price: { type: Number },
        status: { type: String, default: "Success" },
      },
      {
        ProductType: { type: String },
        quantity: { type: Number, default: 1 },
        No_of_people: { type: Number },
        price: { type: Number },
        status: { type: String, default: "Success" },
      },
      {
        ProductType: { type: String },
        quantity: { type: Number, default: 1 },
        No_of_people: { type: Number },
        price: { type: Number },
        status: { type: String, default: "Success" },
      },
    ],
  },

  // Activities Booking

  // {
  //   userId: { type: String },
  //   dateAndTime: { type: Date, required: true },
  //   ProductType: { type: String },
  //   quantity: { type: Number, default: 1 },
  //   No_of_people: { type: Number },
  //   price: { type: Number },
  //   status: { type: String, default: "Success" },
  // },
);

module.exports = mongoose.model("adventuresBooking", AdventuresBookingSchema);
