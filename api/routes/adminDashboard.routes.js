const Express = require("express");
const router = Express.Router();
const { verifyToken, isAdmin } = require("../middlewares/authJwt");

router.get("/admin", (req, res) => {
  res.json({ hola: "hola" });
});

module.exports = router;
