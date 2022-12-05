const { Schema, model } = require("mongoose");

const DonationsSchema = new Schema(
  {
    name: { type: String },
    donation:{type: String}
  },
  {
    versionKey: false,
  }
);



module.exports = model("Donations", DonationsSchema);
