require ("dotenv").config()
const express = require("express") 
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors")
const dbConnect = require("./config/mongo")
const httpServer = require("http").createServer(app);
const options =  {
  cors: {
    origin: "http://localhost:3000",
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'If-Match', 'If-Modified-Since', 'If-None-Match', 'If-Unmodified-Since', 'Accept-Encoding', 'redirect'],
    credentials: true
  }};
//const io = require("socket.io")(httpServer, options);
const { Server } = require("socket.io");
const io = new Server(httpServer, options);
const routes = require("./routes/index.routes")


app.use(cors());
app.use(express.json());
app.use("/", routes);
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

app.use(express.static(__dirname + "/public"));

io.on('connection',function(socket){
  setInterval(() => {
  socket.on('stream',function(image){
    socket.broadcast.emit('stream',image);
  });
}, 1000);
});

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})
httpServer.listen(port, () => {
  console.log(`La app esta corriendo http://localhost: ${port}`);
});

dbConnect();


