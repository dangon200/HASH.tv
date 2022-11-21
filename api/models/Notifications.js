const { Schema, model } = require("mongoose");

const notificationsSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("notification", notificationsSchema);
