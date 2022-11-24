const {Categories} = require("../models//Categories")
const { Schema, model } = require("mongoose");

const StreamSchema = new Schema(
  {
  image:{
    type: String
  },
  name: 
  {type:String
  },
  user:{
    type:String
  },
  category: 
    { type: String
    }
    , ////  CREAR relacion Categorias
  description:{
    type:String
  },
  subcriptores:[
    {
      type: Schema.ObjectId,
      ref: "Suscribers",
    },
  ], ///  CRAR relacion con Subcriptores
  rules:{
    type:String
  },  
  networks:{
    type:String
  },
  contents:{
    type:String
  }
},
{
  timestamps: true,
  versionKey: false,
}
);

const Streams = model("Streams", StreamSchema);

module.exports = {Streams};
