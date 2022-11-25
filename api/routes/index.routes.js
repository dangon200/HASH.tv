const { Router } = require("express");
const authRoutes = require("./auth.routes");
const router = Router();
const users = require("./users.routes")
const streams = require("./streams.routes")
const CategoriesDb = require("./categories.routes")

router.use("/api", users);
router.use("/api/auth", authRoutes);
router.use("/api", streams);
router.use("/categories", CategoriesDb)

module.exports = router;
