const { Schema, model } = require("mongoose");

const RolSchema = new Schema({
  state: { type: ["User", "Guest", "Admin"], default: "Guest" },
});

const Rols = model("Rol", RolSchema);

module.exports = Rols;
