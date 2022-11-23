const { Router } = require("express");
const authRoutes = require("./auth.routes");

<<<<<<< HEAD
=======

>>>>>>> 9fa96d5d355308ca355a30a820a404b91eb29ded
const router = Router();

const users = require("./users.routes");

router.use("/", users);
router.use("/api/auth", authRoutes);
<<<<<<< HEAD
=======
const users = require("./users.routes")
const router = Router();

router.use("/", users)

>>>>>>> 9fa96d5d355308ca355a30a820a404b91eb29ded

module.exports = router;
