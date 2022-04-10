const mongoose = require('mongoose');

const AdventuresDataSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    cost: { type: Number, required: true },
    activity: {
      type: String,
    },
    href: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const AdventuresData = mongoose.model('AdventuresData', AdventuresDataSchema);

module.exports = AdventuresData;
