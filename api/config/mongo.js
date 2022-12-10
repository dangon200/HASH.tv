const mongoose = require("mongoose");

const dbConnect = () => {
  //const MONGO_USER = process.env.MONGO_USER;
  //const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
  //const MONGO_HOST = process.env.MONGO_HOST;
  //const MONGO_NAME = process.env.MONGO_NAME;
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
