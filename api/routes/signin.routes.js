const Express = require("express");

const router = Express.Router();

router.get("/signin", (req, res) => {
  console.log("entre");
  res.send("Sigin");
});

module.exports = router;
