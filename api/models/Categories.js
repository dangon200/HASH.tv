const { Schema, model } = require("mongoose");

const CategoriesSchema = new Schema({
  name: {
    type: String
  },
});


const Categories = model("Categories", CategoriesSchema);

module.exports = { Categories };
