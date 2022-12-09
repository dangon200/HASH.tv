const Express = require("express");
const router = Express.Router();
const Review = require("../models/Reviews");
const Users = require("../models/Users");
const Streams = require("../models/Stream");

const {
  checkExistingUser,
  checkExistingRole,
} = require("../middlewares/index");
const { signUp, signIn } = require("../controllers/auth.controller");

router.post("/signup", checkExistingUser, checkExistingRole, signUp);
router.post("/signin", signIn);

module.exports = router;
