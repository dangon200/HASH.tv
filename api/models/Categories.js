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

module.exports = model("Categories", CategoriesSchema);
