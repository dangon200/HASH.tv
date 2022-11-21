const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  category: {
    type: String,
    enum: ["Gaming", "Creative", "Sports", "Music", "Just Chatting"],
    default: "Just Chatting",
  },
});

module.exports = model("Categories", categoriesSchema);
