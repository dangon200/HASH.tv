const { Schema, model } = require("mongoose");

const CategoriesSchema = new Schema({
  category: {
    type: String,
    enum: ["Gaming", "Creative", "Sports", "Music", "Just Chatting"],
    default: "Just Chatting",
  },
});

const Categories = model("Categories", CategoriesSchema);

module.exports = Categories;
