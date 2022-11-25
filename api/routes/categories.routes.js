const Express = require("express");
const router = Express.Router();
const { Categories } = require("../models/Categories");

router.get("/", async (req, res) => {
  try {
    const dbdata = await Categories.find({});
    res.json(dbdata);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  const { name } = req.body;
  try {
    const categoryCreate = await Categories.create({ name });
    res.json(categoryCreate);
  } catch (error) {
    res.send({ msg: "Category not created" });
    console.log(error);
  }
});

module.exports = router;
