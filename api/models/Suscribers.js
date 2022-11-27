const { Schema, model } = require("mongoose");

const SuscribersSchema = new Schema(
  {
  user:{
    type:String
  },
 
},
{
  timestamps: true,
  versionKey: false,
}
);

const Suscribers = model("Suscribers", SuscribersSchema);

module.exports = { Suscribers };
