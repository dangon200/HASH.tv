const { Schema, model } = require("mongoose");

const StreamSchema = new Schema(
  {
    name: 
    {type:String, 
 
    },
  image:{
    type: String
  },
  user:{
    type:String
  },
  category:[
    {
      type: String,
      
    },
  ]
    , ////  CREAR relacion Categorias
  description:{
    type:String
  },
  subcriptores:[
    {
     type:String
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