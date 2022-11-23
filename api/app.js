require ("dotenv").config()
const express = require("express") 
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app =express()
var io = require("socket.io")(http);

app.use(cors())

const port =process.env.PORT || 3000

app.use(express.static(__dirname + "/public"));

app.get('/',function(req,res){
  res.redirect('index.html'); //para archivos estaticos
});

io.on('connection',function(socket){
  socket.on('stream',function(image){
    socket.broadcast.emit('stream',image);
  });
});

app.listen(port, () => {
    console.log("La app esta corriendo http://localhost:" + port)
})

dbConnect()