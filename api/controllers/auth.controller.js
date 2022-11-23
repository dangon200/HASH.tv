const { Users } = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);
  const newUser = new Users({
    name,
    email,
    password: hash,
    rol: "User",
  });
  const savedUser = await newUser.save();
  console.log(savedUser);
  // const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SEC, {
  //   expiresIn: 86400,
  // });
  res.json(savedUser);
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await Users.findOne({ email: email });
  console.log(userFound);
  if (!userFound) {
    res.status(400).json({ message: "User not found" });
  }
  const matchPassword = await bcrypt.compare(password, userFound.password);
  if (!matchPassword) {
    res.status(401).json({ token: null, message: "Password Incorrect" });
  }
  console.log(userFound);
  res.json("done");
};

module.exports = { signUp, signIn };
