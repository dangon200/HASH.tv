const Express = require("express");
const router = Express.Router();
// const { verifyToken } = require("../middlewares/index");
const {
  checkExistingUser,
  checkExistingRole,
} = require("../middlewares/verifySignup");

const { signUp, signIn } = require("../controllers/auth.controller");

router.post("/signup", checkExistingUser, checkExistingRole, signUp);

router.post("/signin", signIn);

module.exports = router;
