const { Router } = require("express");
const router = Router();

const authRoutes = require("./auth.routes");
const users = require("./users.routes");
const CategoriesDb = require("./categories.routes")

router.use("/", users);
router.use("/api/auth", authRoutes);
router.use("/categories", CategoriesDb)

module.exports = router;
