const { Schema, model, Types } = require("mongoose");

const ReviewsSchema = new Schema(
  {
    comments: {
      type: String,
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

module.exports = model("Review", ReviewsSchema);
