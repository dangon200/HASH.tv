const jwt = require("jsonwebtoken");
const { Users } = require("../models/Users");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    console.log(token);
    if (!token) return res.status(400).json({ message: "No token provided" });
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    console.log(decoded);
    req.userID = decoded.id;
    const user = await Users.findById(req.userID, { password: 0 });
    console.log(user);
    if (!user) return res.status(400).json({ message: "User not found" });
    next();
  } catch (err) {
    res.status(400).json({ message: "Unauthorized" });
  }
};

module.exports = { verifyToken };
