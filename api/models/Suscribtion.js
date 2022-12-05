const { Schema, model, Types } = require("mongoose");

const SubscriptionsSchema = new Schema(
  {
    subscribed: { type: Boolean, default: true },

    currency: {
      type: String,
    },
    timesub: {
      type: String,
    },
    paymentMethod: {
      type: String,
    },
    totalAmount: {
      type: String,
    },
    user: [
      {
        type: Types.ObjectId,
        ref: "Users",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Subscriptions", SubscriptionsSchema);