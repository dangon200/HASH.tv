const Categories = require("../models/Categories");

const getCategories = async (req, res) => {
  try {
    const dbdata = await Categories.find({});
    res.json(dbdata);
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      throw new Error("The category needs a name");
    }
    const categoryCreate = await Categories.create({ name });
    res.json(categoryCreate);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { getCategories, createCategory };