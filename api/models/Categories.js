const { Schema, model } = require("mongoose");

const CategoriesSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const Categories = model("Categories", CategoriesSchema);

module.exports = { Categories };
