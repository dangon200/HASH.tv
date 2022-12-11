const { Schema, model, Types } = require("mongoose");

const RatingSchema = new Schema(
  {
    comments: {
      type: Number,
    },
    name: [
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

module.exports = model("Rating", RatingSchema);
