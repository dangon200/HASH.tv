const { text } = require("express");
const { Schema, model, Types } = require("mongoose");

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
    },
    password: {
      type: String,
    },
    isValid: { type: Boolean },
    uniqueKey: { type: String },
    Subscriptions: [
      {
        type: String,
      },
    ],
    HashCash: {
      type: Number,
      default: 0,
    },

    roles: [
      {
        type: Types.ObjectId,
        ref: "Roles",
      },
    ],

    donations: [
      {
        type: String,
      },
    ],
    myStreams: [
      {
        type: String,
      },
    ],

    banned: {
      type: Boolean,
      default: false,
    },
    country: {
      type: [
        "Argentina",
        "España",
        "Peru",
        "Chile",
        "Francés",
        "Rusia",
        "Portugal",
      ],
      default: "Argentina",
    },
    rating: [
      {
        type: Types.ObjectId,
        ref: "Rating",
      },
    ],
    voted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Users", UsersSchema);
