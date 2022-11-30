const Users = require("../models/Users");
const { Roles } = require("../models/Roles");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { randomString } = require('./users.controller')
const { sendMail } = require('./users.controller')

const signUp = async (req, res) => {
  console.log(req.body)
  try {
    const { username, email, password, roles } = req.body;
    const uniqueKey = randomString()
    const isValid = false
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Users({
      uniqueKey,
      isValid,
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
    sendMail(username, email, uniqueKey)
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SEC, {
      expiresIn: 86400,
    });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await Users.findOne({ email: email }).populate("roles");
    if (!userFound) return res.status(400).json("Correo no encontrado." );
    if(userFound.isValid === false) return res.status(406).json("Su cuenta aun no fue validada, por favor revise su casilla de correos.");
    const matchPassword = await bcrypt.compare(password, userFound.password);
    if (!matchPassword) {
      return res.status(401).json("Contraseña incorrecta.");
    }
    const token = await jwt.sign({ 
      id: userFound._id,
      email: userFound.email,
      username: userFound.name 
    }, process.env.JWT_SEC, {
      expiresIn: 86400,
    });
    const userData = {email: userFound.email, name: userFound.name, _id: userFound._id}
    res.status(200).json({ user: userData, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signUp, signIn };
