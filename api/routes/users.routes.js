const Express = require("express");
const router = Express.Router();

const {
  getUsers,
  getUserById,
  deleteUser,
} = require("../controllers/users.controller");
const { verifyToken, isAdmin } = require("../middlewares/index");

router.get("/users", getUsers);

router.get("/user/:id", getUserById);

router.delete("/user/:id", verifyToken, isAdmin, deleteUser);

module.exports = router;
