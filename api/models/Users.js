const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
      // validator: (e) => {
      //   /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim.test(e);
      // },
    },
    password: {
      type: String,
    },
    rol: {
      type: String,
      enum: ["User", "Guest", "Admin"],
      default: "Guest",
    },
    stream: {
      type: String, ///////////CREAR RELACION USER-STREAM
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// UsersSchema.methods.encryptPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return bcrypt.hash(password, salt);
// };

// UsersSchema.methods.comparePassword = async (password, receivePassword) => {
//   return await bcrypt.compare(password, receivePassword);
// };

const Users = model("Users", UsersSchema);

module.exports = { Users };
