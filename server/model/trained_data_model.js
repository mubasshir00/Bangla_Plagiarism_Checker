const mongoose = require('mongoose');

const trainedDataSchema = mongoose.Schema(
  {
    article: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sub_category:{
        type:Array,
    }
    ,
    Source_link: {
      type: String,
      required: true,
    },
    Source: {
      type: String,
      required: true,
    },
    Writer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TrainedData = mongoose.model('TrainedData', trainedDataSchema);

module.exports = { TrainedData: TrainedData };
