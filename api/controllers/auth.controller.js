const { Users } = require("../models/Users");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);
  const newUser = new Users({
    name,
    email,
    password: hash,
  });
  console.log(newUser);
  const savedUser = await newUser.save();
  res.json(savedUser);
};

const signIn = (req, res) => {
  res.json("signin");
};

module.exports = { signUp, signIn };
