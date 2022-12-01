require("dotenv").config();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const routes = require("./routes/index.routes");
require("./libs/initialSetup.js");

const app = express();

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cookieParser())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, Accept-Encoding, redirect'
  )
  next()
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`La app esta corriendo http://localhost: ${port}`);
});

dbConnect();