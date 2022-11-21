<<<<<<< HEAD
const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("*******CONECCION EXITOSA***********");
      } else {
        console.log("********ERROR DE CONECCION*********");
      }
    }
  );
};

module.exports = dbConnect;
=======
const mongoose = require("mongoose")

const dbConnect = () =>{

    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err, res)=>{
        if(!err){
            console.log("*******CONECCION EXITOSA***********")
        }else{
            console.log("********ERROR DE CONECCION*********")
        }
    })

}

module.exports = dbConnect
>>>>>>> 8f938ffda83711ccc0ce08381fa7abe2d1af7e41
