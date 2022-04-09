const mongoose = require('mongoose');

const ActivitiesDataSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    cost: { type: Number, required: true },
    duration: {
      type: String,
      default: 'Approx 2 Days',
    },
    href: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const ActivitiesData = mongoose.model('ActivitiesData', ActivitiesDataSchema);

module.exports = ActivitiesData;
