const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// const { ObjectId } = Object.Schema;
const products = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

products.plugin(passportLocalMongoose);

module.exports = mongoose.model("Products", products);
