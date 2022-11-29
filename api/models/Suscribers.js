const { Schema, model } = require("mongoose");

const SuscribersSchema = new Schema(
  {
    user: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Suscribers", SuscribersSchema);
