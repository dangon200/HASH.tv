const { Schema, model } = require("mongoose");

const StreamSchema = new Schema(
  {
  name: 
  {type:String
  },
  category: 
    {type:String
    }, ////  CREAR relacion Categorias
  description:{
    type:String
  },
  subcriptores:
    {type: String

    } ///  CRAR relacion con Subcriptores
},
{
  timestamps: true,
  versionKey: false,
}
);

const Streams = model("Streams", StreamSchema);

module.exports = {Streams};
