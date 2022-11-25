const Express = require("express");
const router = Express.Router();

const {
  getCategories,
  createCategory,
} = require("../controllers/categories.controller");
const {
  verifyToken,
  isAdmin,
  isUser,
  checkExistingCategory,
} = require("../middlewares/index");

router.get("/", getCategories);

router.post(
  "/create",
  verifyToken,
  isAdmin,
  checkExistingCategory,
  createCategory
);

module.exports = router;
