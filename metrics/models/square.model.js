const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
  time: {
    type: String,
    required: true,
  },
});

const Time = mongoose.model("squaremetric", MetricSchema);
module.exports = Time;
