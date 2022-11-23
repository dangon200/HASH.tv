const { Router } = require("express");
const authRoutes = require("./auth.routes");
const users = require("./users.routes")
const router = Router();

router.use("/api/auth", authRoutes);

router.use("/", users)

module.exports = router;
