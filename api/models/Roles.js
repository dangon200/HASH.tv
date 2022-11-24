const { Schema, model } = require("mongoose");

const ROLES = ["User", "Admin", "Guest", "Moderator"];

const RolesSchema = new Schema(
  {
    name: { type: String },
  },
  {
    versionKey: false,
  }
);

const Roles = model("Roles", RolesSchema);

module.exports = { Roles, ROLES };
