const { Router } = require("express");

const users = require("./users.routes")
const router = Router();


router.use("/", users)

module.exports = router;
