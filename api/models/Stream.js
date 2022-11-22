const { Schema, model } = require("mongoose");

const StreamSchema = new Schema({
  name: [{ type: Schema.Types.name, ref: "Users" }],
  category: [String],
});
