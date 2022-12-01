const { ROLES } = require("../models/Roles");
const { Roles } = require("../models/Roles");
const Users = require("../models/Users");

const checkExistingUser = async (req, res, next) => {
  try {
    const email = await Users.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const checkExistingRole = async (req, res, next) => {
  const roleBody = req.body.roles;
  const roles = await Roles.find({});
  if (!roles) return res.status(400).json({ message: "No roles" });
  if (roleBody) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roleBody)) {
        return res
          .status(400)
          .json({ message: `Role ${roleBody} does not exist` });
      }
    }
  }
  next();
};

module.exports = { checkExistingUser, checkExistingRole };
