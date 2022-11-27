const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const { Roles } = require("../models/Roles");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(400).json({ message: "No token provided" });
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    req.userId = decoded.id;
    const user = await Users.findById(req.userId, { password: 0 });
    if (!user) return res.status(400).json({ message: "User not found" });
    next();
  } catch (err) {
    res.status(400).json({ message: "Unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await Users.findById(req.userId);
    const roles = await Roles.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "Admin") {
        next();
        return;
      }
    }
    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

const isUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.userId);
    const roles = await Roles.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "User") {
        next();
        return;
      }
    }
    return res.status(403).json({ message: "Require User Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

const isModerattor = async (req, res, next) => {
  try {
    const user = await Users.findById(req.userId);
    const roles = await Roles.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "Moderator") {
        next();
        return;
      }
    }
    return res.status(403).json({ message: "Require Moderator Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

module.exports = { verifyToken, isAdmin, isUser, isModerattor };
