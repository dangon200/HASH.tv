const { Schema, model } = require("mongoose");

const StreamSchema = new Schema(
  {
    title:{
      type:String
    },
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
 
  rules:{
    type:String
  },  
  networks:{
    type:String
  },
  contents:{
    type:String
  },
  language:{
    type: ['Inglés', 'Chino mandarín', 'Hindi', 'Español', 'Francés', 'Ruso', 'Portugués', 'Alemán', 'Japonés' ], default: "Español"
  },
  continent:{
    type:["África", "Antártida", "Asia", "Europa", "Norteamérica", "Oceanía", "Sudamérica"], default: "Sudamérica"
  },
},
{
  timestamps: true,
  versionKey: false,
}
);

// const Streams = model("Streams", StreamSchema);

// module.exports = {Streams};

module.exports = model("Streams", StreamSchema);
