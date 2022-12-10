const { Schema, model, Types } = require("mongoose");

const SubscriptionSchema = new Schema(
  {
    subscribed: { type: Boolean, default: false },
    title: {
      type: String,
    },
    user:{
      type: String,
    },
    createdDate: {
      type: Date,
    },
    expireDate: {
      type: Date,
    },
    totalAmount: {
      type: String,
    },
    paymentMethod: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Subscriptions", SubscriptionSchema);
