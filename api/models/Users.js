const { text } = require("express");
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
    isValid: {type: Boolean,
    },
    uniqueKey: {type: String,
    },
    /* region: {
      type: String,
      required: true
    },
    image: {
      type: String,
      defaultValue: null
    }, */
    
    roles: [
      {
        type: Types.ObjectId,
        ref: "Roles",
      },
    ],
  
    donations: [
      {
        type: Types.ObjectId,
        ref: "Donations",
      },
    ],
    myStreams: [
      {
        type: Types.ObjectId,
        ref: "Streams",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Users", UsersSchema);
