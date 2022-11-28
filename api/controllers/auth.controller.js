const Users = require("../models/Users");
const { Roles } = require("../models/Roles");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = require('./users')

const signUp = async (req, res) => {
  console.log(req.body)
  try {
    const { username, email, password, roles } = req.body;
    console.log(
      "🚀 ~ file: auth.controller.js ~ line 9 ~ signUp ~ req.body",
      req.body
    );
    // console.log(
    //   "🚀 ~ file: auth.controller.js ~ line 9 ~ signUp ~ req.body",
    //   req.body
    // );
    if(!name || !email){
    res.status(404).send("Ingrese los datos correspondientes")  
    }else{
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Users({
      name: username,
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
  }
  } catch (err) {
    console.error(err);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await Users.findOne({ email: email }).populate("roles");
    if (!userFound) return res.status(400).json({ message: "Email not Found" });
    const matchPassword = await bcrypt.compare(password, userFound.password);
    if (!matchPassword) {
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });
    }
    const token = await jwt.sign({ 
      id: userFound._id,
      email: userFound.email,
      username: userFound.name 
    }, process.env.JWT_SEC, {
      expiresIn: 86400,
    });
    const userData = {email: userFound.email, name: userFound.name}
    res.status(200).json({ user: userData, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signUp, signIn };
