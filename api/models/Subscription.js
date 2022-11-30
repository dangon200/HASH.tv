const { Schema, model, Types } = require("mongoose");

const SubscriptionSchema = new Schema(
  {
    subscribed: { type: Boolean, default: false },
    stream: [
      {
        type: Types.ObjectId,
        ref: "Streams",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Subscriptions", SubscriptionSchema);
