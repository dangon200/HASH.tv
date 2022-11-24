const Express = require("express");
const router = Express.Router();
// const { verifyToken } = require("../middlewares/index");
const {
  checkExistingUser,
  checkExistingRole,
} = require("../middlewares/verifySignup");

const { signUp, signIn } = require("../controllers/auth.controller");

<<<<<<< HEAD
router.post("/signup", checkExistingUser, checkExistingRole, signUp);

=======
router.post("/signup", signUp);
>>>>>>> 445d8ee5282006de3c977f583b818a5897c09a81
router.post("/signin", signIn);

module.exports = router;
