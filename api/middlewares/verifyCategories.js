const Categories = require("../models/Categories");

const checkExistingCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const categories = await Categories.find({});
    const includeName = categories.map((c) => c.name);
    if (!includeName.includes(name)) {
      next();
    } else {
      throw new Error("The category already exists");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = checkExistingCategory;
