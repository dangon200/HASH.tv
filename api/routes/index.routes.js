const { Router } = require("express");

const signin = require("./signin.routes");
const signout = require("./signout.routes");
const router = Router();

router.use("/", signin);
router.use("/", signout);

module.exports = router;
