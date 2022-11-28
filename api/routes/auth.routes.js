const Express = require("express");
const router = Express.Router();
const {
  checkExistingUser,
  checkExistingRole,
} = require("../middlewares/index");
const { signUp, signIn } = require("../controllers/auth.controller");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/signup", checkExistingUser, checkExistingRole, signUp);
router.post("/signin", signIn);

module.exports = router;