const { ROLES } = require("../models/Roles");
const { Roles } = require("../models/Roles");
const Users = require("../models/Users");

const checkExistingUser = async (req, res, next) => {
  try {
    console.log(
      "🚀 ~ file: verifySignup.js ~ line 8 ~ checkExistingUser ~ req.body",
      req.body
    );
    const email = await Users.findOne({ email: req.body.email });
    console.log(
      "🚀 ~ file: verifySignup.js ~ line 13 ~ checkExistingUser ~ email",
      email
    );
    if (email)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const checkExistingRole = async (req, res, next) => {
  const roleBody = req.body.roles;
  console.log(
    "🚀 ~ file: verifySignup.js ~ line 27 ~ checkExistingRole ~ roleBody",
    roleBody
  );
  const roles = await Roles.find({});
  console.log(
    "🚀 ~ file: verifySignup.js ~ line 31 ~ checkExistingRole ~ roles",
    roles
  );
  if (!roles) return res.status(400).json({ message: "No roles" });
  if (roleBody) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roleBody)) {
        return res.status(400).json({
          message: `Role ${roleBody} does not exist`,
        });
      }
    }
  }
  next();
};

module.exports = { checkExistingUser, checkExistingRole };
