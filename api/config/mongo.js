const mongoose = require("mongoose");

const dbConnect = () => {
  const MONGOUSER = process.env.MONGOUSER;
  const MONGOPASSWORD = process.env.MONGOPASSWORD;
  const MONGOHOST = process.env.MONGOHOST;
  const MONGONAME = process.env.MONGONAME;
  mongoose.connect(
    `mongodb+srv://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}/${MONGONAME}?retryWrites=true&w=majority`,
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
