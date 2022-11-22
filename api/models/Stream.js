const { Schema, model, Types } = require("mongoose");

const StreamSchema = new Schema({
  name: { type: Types.ObjectId, ref: "Users" },
  category: [String],
});

const Streams = model("Streams", StreamSchema);

module.exports = Streams;
