const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

contactSchema.plugin(passportLocalMongoose);

const contactUs = mongoose.model("ContactUs", contactSchema);

module.exports = contactUs;
