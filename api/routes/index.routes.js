const { Router } = require("express");

const signin = require("./signin.routes");
const signout = require("./signout.routes");
const users = require("./users.routes")
const router = Router();

router.use("/", signin);
router.use("/", signout);
router.use("/", users)

module.exports = router;
