const mongoose = require('mongoose');

const EventDataSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    cost: { type: Number, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const EventData = mongoose.model('EventData', EventDataSchema);

module.exports = EventData;
