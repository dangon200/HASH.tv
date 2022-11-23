const { Router } = require("express");
const router = Router();

const authRoutes = require("./auth.routes");
const users = require("./users.routes");

router.use("/", users);
router.use("/api/auth", authRoutes);

module.exports = router;
