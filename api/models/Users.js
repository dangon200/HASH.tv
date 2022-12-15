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
    Subscriptions: [
      {
        type: String,
      },
    ],
    image: {
      type: String, default: null
    },
    HashCash: {
      type: Number, default: 0
    },
  
    roles: [
      {
        type: Types.ObjectId,
        ref: "Roles",
      },
    ],
  
    donations: [
      {
        type: String,
      },
    ],
    myStreams: [
      {
        type: String,
      },
    ],
   
    banned: { 
      type: Boolean,
      default: false
     },
     country: { 
      type: ['Argentina', 'España', 'Peru', 'Chile', 'Francés', 'Rusia', 'Portugal' ], default: "Argentina"
     },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Users", UsersSchema);
