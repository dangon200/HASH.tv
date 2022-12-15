const Streams = require("../models/Stream");
const Users = require("../models/Users");
const Express = require("express");
const router = Express.Router();
const { getStreamsDb } = require("../controllers/Streams");
const { votedRating } = require("../controllers/rating.controller");

router.get("/streams", async (req, res) => {
  try {
    const { name } = req.query;
    const streamsDb = await Streams.find({});
    if (name) {
      const filterStreams = streamsDb.filter((stream) =>
        stream.name.toLowerCase().includes(name.toLowerCase())
      );
      filterStreams.length
        ? res.send(filterStreams)
        : res.status(404).send("No se escontro ese Streamer");
    } else {
      res.send(streamsDb);
    }
  } catch (error) {
    res.status(404).send("Se rompio como mi corazon");
  }
});

router.get("/streams/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const streamDb = await getStreamsDb();
    if (id) {
      const filterStream = streamDb.filter(
        (stream) => stream._id.toString() === id
      );
      filterStream.length
        ? res.json(filterStream)
        : res.send("Error al obtener Id de Stream");
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
    const stream = await Streams.create(data);
    const userStream = await Users.findOne({ _id: id });
    userStream.myStreams.push(stream._id);
    const savedStream = await userStream.save();
    res.send(savedStream);
  } catch (error) {
    res.status(404).send("Problemas creando un Stream");
  }
});

router.put("/streams/:id", async (req, res) => {
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
});

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
  try {
    let streams = await getStreamsDb();
    if (categoria) {
      streams = streams.filter((stream) => stream.category[0] === categoria);
    }
    if (lenguaje) {
      streams = streams.filter((stream) => stream.language[0] === lenguaje);
    }
    if (continente) {
      streams = streams.filter((stream) => stream.continent[0] === continente);
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
    } else if (opt === "za") {
      streams = streams.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
      });
    } else if (opt === "more") {
      streams = streams.sort((a, b) => {
        if (a.suscriptores[0] < b.suscriptores[0]) return 1;
        if (a.suscriptores[0] > b.suscriptores[0]) return -1;
        return 0;
      });
    } else if (opt === "less") {
      streams = streams.sort((a, b) => {
        if (a.subcriptores[0] > b.subcriptores[0]) return 1;
        if (a.subcriptores[0] < b.subcriptores[0]) return -1;
        return 0;
      });
    }
    res.status(200).json(streams);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/streams", async (req, res) => {
  try {
    const data = req.body;
    const stream = await Streams.create(data);
    res.send(stream);
  } catch (error) {
    res.send("Error en Stream");
  }
});
router.post("/streams/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const stream = await Streams.create(data);
    const userStream = await Users.findOne({ _id: id });
    userStream.myStreams.push(stream._id);
    const savedStream = await userStream.save();
    res.send(savedStream);
  } catch (error) {
    res.status(404).send("Problemas creando un Stream");
  }
});

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
