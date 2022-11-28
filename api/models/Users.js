const { Schema, model, Types } = require("mongoose");

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
      //   /^([\w.-]+)?\w+@[\w-]+(.\w+){1,}$/gim.test(e);
      // },
    },
    password: {
      type: String,
    },

    roles: [
      {
        type: Types.ObjectId,
        ref: "Roles",
      },
    ],
    stream: {
      type: String, ///////////CREAR RELACION USER-STREAM
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Users", UsersSchema);
