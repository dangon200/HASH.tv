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
      //   /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim.test(e);
      // },
    },
    password: {
      type: String,
    },
<<<<<<< HEAD
    rol: {
      type: String,
      enum: ["User", "Guest", "Admin"],
      default: "Guest",
    },
    stream: [
        {
          type: Schema.Types.ObjectId,
          ref: "Streams",
        }
      ],
       ///////////CREAR RELACION USER-STREAM
=======
    roles: [
      {
        type: Types.ObjectId,
        ref: "Roles",
      },
    ],
    stream: {
      type: String, ///////////CREAR RELACION USER-STREAM
    },
>>>>>>> ec31573e9808a890256d5b5b805d760001793d12
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Users", UsersSchema);
