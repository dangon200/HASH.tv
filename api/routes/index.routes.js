const { Router } = require("express");
const authRoutes = require("./auth.routes");

const router = Router();

const users = require("./users.routes");

router.use("/", users);
router.use("/api/auth", authRoutes);

module.exports = router;
