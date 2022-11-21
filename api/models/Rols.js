const { Schema, model } = require("mongoose");

const RolSchema = new Schema({
  state: { type: String, enum: ["User", "Guest", "Admin"], default: "User" },
});

module.exports = model("Rol", RolSchema);
