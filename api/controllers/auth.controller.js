const Users = require("../models/Users");
const { Roles } = require("../models/Roles");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { name, email, password, roles } = req.body;
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Users({
      name,
      email,
      password: hash,
    });

    if (roles) {
      const foundRoles = await Roles.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Roles.findOne({ name: "User" });
      newUser.roles = [role._id];
    }
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SEC, {
      expiresIn: 86400,
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await Users.findOne({ email: email }).populate("roles");
    console.log(
      "🚀 ~ file: auth.controller.js ~ line 43 ~ signIn ~ userFound",
      userFound
    );
    if (!userFound) return res.status(400).json({ message: "Email not Found" });
    const matchPassword = await bcrypt.compare(password, userFound.password);
    if (!matchPassword) {
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });
    }
    const token = await jwt.sign({ id: userFound._id }, process.env.JWT_SEC, {
      expiresIn: 86400,
    });
    console.log(token, "asdasd")
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signUp, signIn };
