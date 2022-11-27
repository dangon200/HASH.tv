const { Schema, model , Types} = require("mongoose");

const StreamSchema = new Schema(
  {
    name: 
    {type:String, 
    required: true,
    unique: true,
    },
  image:{
    type: String
  },
  user:{
    type:String
  },
  category:[
    {
      type: Types.ObjectId,
      ref: "Categories",
    },
  ]
    , ////  CREAR relacion Categorias
  description:{
    type:String
  },
  subcriptores:[
    {
      type: Types.ObjectId,
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

// const Streams = model("Streams", StreamSchema);

// module.exports = {Streams};

module.exports = model("Streams", StreamSchema);