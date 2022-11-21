const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: [true, "The email is required"],
    validator: (v) => {
      /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim.test(v);
    },
  },
  password:{
    type: String
  },
  rol: { 
    type: String,
    ref: ["user", "admin", "guest"] }
});

module.exports = model("Users", UsersSchema);
