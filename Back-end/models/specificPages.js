const mongoose = require('mongoose');

const SpecificPagesSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    description: { type: String, required: true },
    aboutActivity: { type: String, required: true },
    advisory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const SpecificPagesData = mongoose.model(
  'SpecificPagesData',
  SpecificPagesSchema
);

module.exports = SpecificPagesData;
