require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const routes = require("./routes/index.routes");

const app = express();

app.use(cors());
app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`La app esta corriendo http://localhost: ${port}`);
});

dbConnect();
