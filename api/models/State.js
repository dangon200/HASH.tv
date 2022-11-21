const { Schema, model } = require("mongoose");

const statesSchema = new Schema({
  name: { type: String, state: ["accepted", "rejected"], default: "accepted" },
});

module.exports = model("state", statesSchema);
