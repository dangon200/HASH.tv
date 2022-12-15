const Streams = require("../models/Stream");
const Users = require("../models/Users");
const Express = require("express");
const router = Express.Router();
const { getStreamsDb } = require("../controllers/Streams");
const { votedRating } = require("../controllers/rating.controller");

router.get("/stream1/a", async (req, res) => {
  try {
    const streamsDb = await getStreamsDb()
    res.send(streamsDb)
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/streams/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const streamDb = await getStreamsDb();
    console.log(streamDb, "---id")
    if (id) {
      const filterStream = streamDb.filter(
        (stream) => stream._id.toString() === id
      );
      filterStream.length
        ? res.json(filterStream)
        : res.send(streamDb);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

router.post("/streams/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data)
    const stream = await Streams.create({
      title: data.title,
      image: data.image,
      description: data.description,
      name: data.name,
      banner: data.banner,
      category: data.category,
      Facebook: data.Facebook,
      Instagram: data.Instagram,
      Twitter: data.Twitter,
      rules: data.Rules,
    });
    console.log(stream)
    const userStream = await Users.findOne({ _id: id });
    userStream.myStreams.push(stream._id);
    const savedStream = await userStream.save();
    res.status(200).send(savedStream);
  } catch (error) {
    res.status(404).send("Problemas creando un Stream");
  }
});

/* router.put("/streams/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, description, image } = req.body;
    const streamDb = await Streams.find({});
    const filterStream = streamDb.filter((stream) => stream._id == id);
    filterStream[0].name = name;
    filterStream[0].title = title;
    filterStream[0].description = description;
    filterStream[0].image = image;
    await filterStream[0].save();
    res.json(filterStream);
  } catch (error) {
    res.status(500).send("No se pudo editar el Stream");
  }
}); */

/* router.delete("/streams/id/:id", async(req,res)=>{
    try {
    const {id} = req.params
    if(!id){
        res.send("Ingrese un Stream correcto")
    }else{
        Streams.deleteOne({_id:(id)})
        res.send("Stream eliminado con exito")
    }
  } catch (error) {
        res.status(404).send("Se rompio como mi corazon")
    }
}) */

router.get("/streams/filter", async (req, res) => {
  const { categoria, lenguaje, continente, opt } = req.query;
  console.log(req.query)
  try {
    let streams = await getStreamsDb();
    if (categoria) {
      streams = streams.filter((stream) => stream.category[0] === categoria);
      console.log(streams)
    }
    if (lenguaje) {
      streams = streams.filter((stream) => stream.language[0] === lenguaje);
      console.log(streams)
    }
    if (continente) {
      streams = streams.filter((stream) => stream.continent[0] === continente);
      console.log(streams)
    }
    if (!streams.length)
      return res
        .status(200)
        .json("No hay streams con los filtros seleccionados!");

    if (opt === "az") {
      streams = streams.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      });
      console.log(streams)
    } else if (opt === "za") {
      streams = streams.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
      });
      console.log(streams)
    } else if (opt === "more") {
      streams = streams.sort((a, b) => {
        if (a.suscriptores[0] < b.suscriptores[0]) return 1;
        if (a.suscriptores[0] > b.suscriptores[0]) return -1;
        return 0;
      });
      console.log(streams)
    } else if (opt === "less") {
      streams = streams.sort((a, b) => {
        if (a.subcriptores[0] > b.subcriptores[0]) return 1;
        if (a.subcriptores[0] < b.subcriptores[0]) return -1;
        return 0;
      });
      console.log(streams)
    }
    res.status(200).json(streams);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
/* 
router.post("/streams/:id", async (req,res)=>{
try {
    const {id} = req.params
    const data= req.body
    const stream = await Streams.create(data)
    const userStream = await Users.findOne({_id:id})
    userStream.myStreams.push(stream._id)
    const savedStream = await userStream.save();
    res.send(savedStream);
  } catch (error) {
    res.status(404).send("Problemas creando un Stream");
  }
}); */

router.post("/streams/rating/:id", async (req, res) => {
  const { id } = req.params;
  const foundUser = await Users.findById(id).populate("myStreams");
  const stream = await Streams.findById(foundUser.myStreams.map((s) => s._id));
  const rating = stream.rating;
  console.log(
    "🚀 ~ file: streams.routes.js:144 ~ router.post ~ rating",
    rating
  );
  res.status(200).json(stream);
});

router.post("/rating", votedRating);

module.exports = router;
