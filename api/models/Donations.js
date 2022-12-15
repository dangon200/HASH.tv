const { Schema, model } = require("mongoose");

const DonationsSchema = new Schema(
  {
    user: [{ type: String }],
    streamer: [{ type: String }],
    price: { type: Number },
    comment:{type: String},
  },
  {
    versionKey: false,
  }
);



module.exports = model("Donations", DonationsSchema);
