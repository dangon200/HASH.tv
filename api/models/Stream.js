const { Schema, model, Types } = require("mongoose");

const StreamSchema = new Schema({

  name: 
  { type: Types.ObjectId,
    ref: "Users" 
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

module.exports = Streams;
