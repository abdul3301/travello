const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { ObjectId } = mongoose.Schema;
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    wishlist: [{ type: ObjectId, ref: "Products" }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;
